"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Plus } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "./command"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

interface Unit {
  id: number
  name: string
  itemId: number
}

interface ComboboxUnitsProps {
  units: Unit[]
  selectedUnit?: string
  onSelect: (value: string) => void
  onCreateUnit: (name: string) => Promise<void>
  isLoading?: boolean
  disabled?: boolean
}

export function ComboboxUnits({ 
  units, 
  selectedUnit, 
  onSelect,
  onCreateUnit,
  isLoading = false,
  disabled = false 
}: ComboboxUnitsProps) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")

  const createUnit = React.useCallback(async () => {
    if (!search) return
    await onCreateUnit(search)
    setSearch("")
  }, [search, onCreateUnit])

  const selectedUnitName = React.useMemo(() => {
    if (!selectedUnit) return ""
    const unit = units.find(unit => unit.id.toString() === selectedUnit)
    return unit?.name || ""
  }, [selectedUnit, units])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
          disabled={isLoading || disabled}
        >
          {isLoading 
            ? "Loading units..." 
            : selectedUnitName || "Select a unit..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command shouldFilter={false}>
          <CommandInput
            placeholder="Search units..."
            value={search}
            onValueChange={setSearch}
          />
          <CommandEmpty>
            <button
              onClick={createUnit}
              className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
            >
              <Plus className="h-4 w-4" />
              Create "{search}"
            </button>
          </CommandEmpty>
          <CommandGroup>
            {units.filter(unit => 
              unit.name.toLowerCase().includes(search.toLowerCase())
            ).map((unit) => (
              <CommandItem
                key={unit.id}
                value={unit.id.toString()}
                onSelect={onSelect}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selectedUnit === unit.id.toString() ? "opacity-100" : "opacity-0"
                  )}
                />
                {unit.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}