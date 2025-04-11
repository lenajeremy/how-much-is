"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Plus } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "./command"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

interface Item {
  id: number
  name: string
}

interface ComboboxItemsProps {
  items: Item[]
  selectedItem?: string
  onSelect: (value: string) => void
  onCreateItem: (name: string) => Promise<void>
  isLoading?: boolean
}

export function ComboboxItems({ 
  items, 
  selectedItem, 
  onSelect,
  onCreateItem,
  isLoading = false 
}: ComboboxItemsProps) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")

  const createItem = React.useCallback(async () => {
    if (!search) return
    await onCreateItem(search)
    setSearch("")
  }, [search, onCreateItem])

  const selectedItemName = React.useMemo(() => {
    if (!selectedItem) return ""
    const item = items.find(item => item.id.toString() === selectedItem)
    return item?.name || ""
  }, [selectedItem, items])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
          disabled={isLoading}
        >
          {isLoading 
            ? "Loading items..." 
            : selectedItemName || "Select an item..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command shouldFilter={false}>
          <CommandInput
            placeholder="Search items..."
            value={search}
            onValueChange={setSearch}
          />
          <CommandEmpty>
            <button
              onClick={createItem}
              className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
            >
              <Plus className="h-4 w-4" />
              Create "{search}"
            </button>
          </CommandEmpty>
          <CommandGroup>
            {items.filter(item => 
              item.name.toLowerCase().includes(search.toLowerCase())
            ).map((item) => (
              <CommandItem
                key={item.id}
                value={item.id.toString()}
                onSelect={onSelect}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selectedItem === item.id.toString() ? "opacity-100" : "opacity-0"
                  )}
                />
                {item.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}