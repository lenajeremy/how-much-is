"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./table";
import { Button } from "./button";
import { Popover, PopoverTrigger, PopoverContent } from "./popover";
import { ComboboxItems } from "./combobox-items";
import { ComboboxUnits } from "./combobox-units";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Filter } from "lucide-react";
import { Label } from "./label";

interface PriceReport {
  id: number;
  price: number;
  itemName: string;
  unitName: string;
  marketName: string;
  cityName: string;
  stateName: string;
  createdAt: string;
  itemId: number;
  unitId: number;
  marketId: number;
  cityId: number;
  stateId: number;
}

interface PaginationMetadata {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface State {
  id: number;
  name: string;
}

interface City {
  id: number;
  name: string;
}

interface Market {
  id: number;
  name: string;
}

interface Unit {
  id: number;
  name: string;
  itemId: number;
}

interface Item {
  id: number;
  name: string;
  units: Unit[];
}

export function RecentPricesTable() {
  const [prices, setPrices] = useState<PriceReport[]>([]);
  const [metadata, setMetadata] = useState<PaginationMetadata>();
  const [loading, setLoading] = useState(true);
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [markets, setMarkets] = useState<Market[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);

  // Filter states
  const [selectedStateId, setSelectedStateId] = useState<string>("");
  const [selectedCityId, setSelectedCityId] = useState<string>("");
  const [selectedMarketId, setSelectedMarketId] = useState<string>("");
  const [selectedItemId, setSelectedItemId] = useState<string>("");
  const [selectedUnitId, setSelectedUnitId] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  // Fetcher function
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  };

  // Load initial data
  useEffect(() => {
    Promise.all([fetcher("/api/states"), fetcher("/api/items")])
      .then(([statesData, itemsData]) => {
        setStates(statesData);
        setItems(itemsData);
      })
      .catch((error) => {
        toast.error("Failed to load initial data");
        console.error(error);
      });
  }, []);

  // Load cities when state changes
  useEffect(() => {
    if (selectedStateId) {
      fetcher(`/api/states/${selectedStateId}/cities`)
        .then((data) => setCities(data))
        .catch(() => toast.error("Failed to load cities"));
    } else {
      setCities([]);
    }
  }, [selectedStateId]);

  // Load markets when city changes
  useEffect(() => {
    if (selectedCityId) {
      fetcher(`/api/cities/${selectedCityId}/markets`)
        .then((data) => setMarkets(data))
        .catch(() => toast.error("Failed to load markets"));
    } else {
      setMarkets([]);
    }
  }, [selectedCityId]);

  // Update available units when item changes
  useEffect(() => {
    if (selectedItemId) {
      const selectedItem = items.find(
        (item) => item.id.toString() === selectedItemId
      );
      setUnits(selectedItem?.units || []);
      setSelectedUnitId("");
    } else {
      setUnits([]);
    }
  }, [selectedItemId, items]);

  // Load price reports with filters
  const loadPrices = async (page = 1) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "10",
      });

      if (selectedStateId) params.append("stateId", selectedStateId);
      if (selectedCityId) params.append("cityId", selectedCityId);
      if (selectedMarketId) params.append("marketId", selectedMarketId);
      if (selectedItemId) params.append("itemId", selectedItemId);
      if (selectedUnitId) params.append("unitId", selectedUnitId);

      const response = await fetch(`/api/prices?${params.toString()}`);
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Failed to load prices");

      setPrices(data.data);
      setMetadata(data.metadata);
      setCurrentPage(page);
    } catch (error) {
      toast.error("Failed to load prices");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Load prices when filters change
  useEffect(() => {
    loadPrices(1);
  }, [
    selectedStateId,
    selectedCityId,
    selectedMarketId,
    selectedItemId,
    selectedUnitId,
  ]);

  const handleStateChange = (value: string) => {
    setSelectedStateId(value);
    setSelectedCityId("");
    setSelectedMarketId("");
  };

  const handleCityChange = (value: string) => {
    setSelectedCityId(value);
    setSelectedMarketId("");
  };

  const handleItemChange = (value: string) => {
    setSelectedItemId(value);
    setSelectedUnitId("");
  };

  const clearFilters = () => {
    setSelectedStateId("");
    setSelectedCityId("");
    setSelectedMarketId("");
    setSelectedItemId("");
    setSelectedUnitId("");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-NG", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(price);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Recent Prices</h2>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-4" align="end">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="item">Item</Label>
                <ComboboxItems
                  items={items}
                  selectedItem={selectedItemId}
                  onSelect={handleItemChange}
                  onCreateItem={async () => Promise.resolve()}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="unit">Unit</Label>
                <ComboboxUnits
                  units={units}
                  selectedUnit={selectedUnitId}
                  onSelect={setSelectedUnitId}
                  onCreateUnit={async () => Promise.resolve()}
                  disabled={!selectedItemId}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="state">State</Label>
                <Select
                  value={selectedStateId}
                  onValueChange={handleStateChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>All States</SelectLabel>
                      {states.map((state) => (
                        <SelectItem key={state.id} value={state.id.toString()}>
                          {state.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="city">City</Label>
                <Select
                  value={selectedCityId}
                  onValueChange={handleCityChange}
                  disabled={!selectedStateId}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>All Cities</SelectLabel>
                      {cities.map((city) => (
                        <SelectItem key={city.id} value={city.id.toString()}>
                          {city.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="market">Market</Label>
                <Select
                  value={selectedMarketId}
                  onValueChange={setSelectedMarketId}
                  disabled={!selectedCityId}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select market" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>All Markets</SelectLabel>
                      {markets.map((market) => (
                        <SelectItem
                          key={market.id}
                          value={market.id.toString()}
                        >
                          {market.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <Button variant="outline" onClick={clearFilters} className="mt-2">
                Clear Filters
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead>Market</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : prices.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  No prices found
                </TableCell>
              </TableRow>
            ) : (
              prices.map((price) => (
                <TableRow key={price.id}>
                  <TableCell>{price.itemName}</TableCell>
                  <TableCell>{price.unitName}</TableCell>
                  <TableCell className="text-right font-medium">
                    {formatPrice(price.price)}
                  </TableCell>
                  <TableCell>{price.marketName}</TableCell>
                  <TableCell>{`${price.cityName}, ${price.stateName}`}</TableCell>
                  <TableCell>{formatDate(price.createdAt)}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {metadata && metadata.totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => loadPrices(currentPage - 1)}
            disabled={currentPage === 1 || loading}
          >
            Previous
          </Button>
          <span className="py-2">
            Page {currentPage} of {metadata.totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => loadPrices(currentPage + 1)}
            disabled={currentPage === metadata.totalPages || loading}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
