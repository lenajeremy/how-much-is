"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState, useEffect } from "react"
import { Button } from "./button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./form"
import { Input } from "./input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"
import { toast } from "sonner"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table"
import { ComboboxItems } from "./combobox-items"
import { ComboboxUnits } from "./combobox-units"

// Types based on your Prisma schema
interface State {
  id: number
  name: string
}

interface City {
  id: number
  name: string
}

interface Market {
  id: number
  name: string
}

interface Unit {
  id: number
  name: string
  itemId: number
}

interface Item {
  id: number
  name: string
  units: Unit[]
}

interface PriceReportResponse {
  id: number
  price: number
  itemName: string
  unitName: string
  marketName: string
  cityName: string
  stateName: string
  createdAt: string
}

const formSchema = z.object({
  stateId: z.string().min(1, { message: "Please select a state" }),
  cityId: z.string().min(1, { message: "Please select a city" }),
  marketId: z.string().min(1, { message: "Please select a market" }),
  itemId: z.string().min(1, { message: "Please select an item" }),
  unitId: z.string().min(1, { message: "Please select a unit" }),
  price: z.number().min(0.01, { message: "Price must be greater than 0" }),
})

interface PriceSubmissionFormProps {
  onPriceSubmit: (report: PriceReportResponse) => void
}

export function PriceSubmissionForm({ onPriceSubmit }: PriceSubmissionFormProps) {
  const [states, setStates] = useState<State[]>([])
  const [cities, setCities] = useState<City[]>([])
  const [markets, setMarkets] = useState<Market[]>([])
  const [items, setItems] = useState<Item[]>([])
  const [availableUnits, setAvailableUnits] = useState<Unit[]>([])
  const [isLoadingStates, setIsLoadingStates] = useState(true)
  const [isLoadingCities, setIsLoadingCities] = useState(false)
  const [isLoadingMarkets, setIsLoadingMarkets] = useState(false)
  const [isLoadingItems, setIsLoadingItems] = useState(true)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  // Fetcher function with better error handling
  const fetcher = async (url: string) => {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  }

  // Create new item
  const createItem = async (name: string) => {
    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      })
      if (!response.ok) throw new Error('Failed to create item')
      const newItem = await response.json()
      setItems(prev => [...prev, newItem])
      form.setValue('itemId', newItem.id.toString())
      toast.success('Item created successfully')
    } catch (error) {
      toast.error('Failed to create item')
    }
  }

  // Create new unit for the current item
  const createUnit = async (name: string) => {
    try {
      const itemId = parseInt(form.getValues('itemId'))
      if (!itemId) throw new Error('No item selected')

      const response = await fetch('/api/units', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, itemId }),
      })
      if (!response.ok) throw new Error('Failed to create unit')
      const newUnit = await response.json()
      setAvailableUnits(prev => [...prev, newUnit])
      form.setValue('unitId', newUnit.id.toString())
      toast.success('Unit created successfully')
    } catch (error) {
      toast.error('Failed to create unit')
    }
  }

  // Initial data fetching
  useEffect(() => {
    fetcher('/api/states')
      .then(data => setStates(data))
      .catch(() => toast.error("Failed to load states"))
      .finally(() => setIsLoadingStates(false))

    fetcher('/api/items')
      .then(data => setItems(data))
      .catch(() => toast.error("Failed to load items"))
      .finally(() => setIsLoadingItems(false))
  }, [])

  // Fetch cities when state changes
  useEffect(() => {
    const stateId = form.watch("stateId")
    if (stateId) {
      setIsLoadingCities(true)
      setCities([])
      setMarkets([])
      form.setValue("cityId", "")
      form.setValue("marketId", "")
      fetcher(`/api/states/${stateId}/cities`)
        .then(data => setCities(data))
        .catch(() => toast.error("Failed to load cities"))
        .finally(() => setIsLoadingCities(false))
    }
  }, [form.watch("stateId"), form])

  // Fetch markets when city changes
  useEffect(() => {
    const cityId = form.watch("cityId")
    if (cityId) {
      setIsLoadingMarkets(true)
      setMarkets([])
      form.setValue("marketId", "")
      fetcher(`/api/cities/${cityId}/markets`)
        .then(data => setMarkets(data))
        .catch(() => toast.error("Failed to load markets"))
        .finally(() => setIsLoadingMarkets(false))
    }
  }, [form.watch("cityId"), form])

  // Update available units when item changes
  useEffect(() => {
    const itemId = form.watch("itemId")
    if (itemId) {
      const selectedItem = items.find(item => item.id.toString() === itemId)
      setAvailableUnits(selectedItem?.units || [])
      form.setValue("unitId", "")
    }
  }, [form.watch("itemId"), items, form])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/prices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          stateId: parseInt(values.stateId),
          cityId: parseInt(values.cityId),
          marketId: parseInt(values.marketId),
          itemId: parseInt(values.itemId),
          unitId: parseInt(values.unitId),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit price')
      }

      const newReport = await response.json()
      onPriceSubmit(newReport)
      toast.success("Thanks for contributing!")
      form.reset()
    } catch (error) {
      toast.error("Failed to submit price. Please try again.")
    }
  }

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto p-6">
          <FormField
            control={form.control}
            name="stateId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a state" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {isLoadingStates ? (
                      <SelectItem value="loading" disabled>Loading states...</SelectItem>
                    ) : (
                      states.map((state) => (
                        <SelectItem key={state.id} value={state.id.toString()}>
                          {state.name}
                        </SelectItem>
                      ))
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cityId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value} disabled={!form.watch("stateId")}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a city" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {isLoadingCities ? (
                      <SelectItem value="loading" disabled>Loading cities...</SelectItem>
                    ) : (
                      cities.map((city) => (
                        <SelectItem key={city.id} value={city.id.toString()}>
                          {city.name}
                        </SelectItem>
                      ))
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="marketId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Market</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value} disabled={!form.watch("cityId")}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a market" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {isLoadingMarkets ? (
                      <SelectItem value="loading" disabled>Loading markets...</SelectItem>
                    ) : (
                      markets.map((market) => (
                        <SelectItem key={market.id} value={market.id.toString()}>
                          {market.name}
                        </SelectItem>
                      ))
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="itemId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Item</FormLabel>
                <FormControl>
                  <ComboboxItems
                    items={items}
                    selectedItem={field.value}
                    onSelect={field.onChange}
                    onCreateItem={createItem}
                    isLoading={isLoadingItems}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="unitId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unit</FormLabel>
                <FormControl>
                  <ComboboxUnits
                    units={availableUnits}
                    selectedUnit={field.value}
                    onSelect={field.onChange}
                    onCreateUnit={createUnit}
                    disabled={!form.watch("itemId")}
                  />
                </FormControl>
                <FormDescription>
                  Units are specific to each item
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price (₦)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter price in Naira"
                    {...field}
                    onChange={e => field.onChange(parseFloat(e.target.value))}
                  />
                </FormControl>
                <FormDescription>
                  Enter the price in Nigerian Naira (₦)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Submit Price</Button>
        </form>
      </Form>
    </div>
  )
}