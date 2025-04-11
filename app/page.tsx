"use client";

import { useState } from "react";
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";
import { PriceSubmissionForm } from "@/components/ui/price-submission-form";
import { RecentPricesTable } from "@/components/ui/recent-prices-table";

export default function Home() {
  const [fetchError, setFetchError] = useState<string | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-100">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Market Price Watch
        </h1>

        {/* Global Error Display */}
        {fetchError && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{fetchError}</span>
          </div>
        )}

        <Tabs defaultValue="submit" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="submit">Submit Price</TabsTrigger>
            <TabsTrigger value="view">View All Prices</TabsTrigger>
          </TabsList>

          <TabsContent value="submit" className="mt-6">
            <PriceSubmissionForm
              onPriceSubmit={(priceReport) => {
                console.log(priceReport);
                alert(JSON.stringify(priceReport, null, 2));
                // Here you would typically send the price report to your server
              }}
            />
          </TabsContent>

          <TabsContent value="view" className="mt-6">
            <RecentPricesTable />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
