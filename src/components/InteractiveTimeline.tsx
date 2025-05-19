"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface Experience {
  id: string;
  type: "Professional" | "Educational";
  label: string;
  title: string;
  startDate: string;
  endDate: string;
  duration: string;
  location: string;
  experienceType: string;
  description: string;
}

interface TimelineProps {
  experiences: Experience[];
}

const sortByDate = (data: Experience[]) => {
  return [...data].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
};

export default function InteractiveTimeline({ experiences }: TimelineProps) {
  const sorted = sortByDate(experiences);
  const [openSection, setOpenSection] = useState<
    "Professional" | "Educational" | null
  >("Professional");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedId && sorted.length > 0) {
      setSelectedId(sorted[0].id);
    }
  }, [sorted, selectedId]);

  const filteredByType = (type: "Professional" | "Educational") =>
    sortByDate(experiences.filter((exp) => exp.type === type));

  const selected = experiences.find((exp) => exp.id === selectedId);

  return (
    <div className="flex flex-col md:flex-row h-full w-full max-w-4xl mx-auto">
      {/* LEFT SIDEBAR */}
      <div className="md:w-1/3 border-r border-gray-200 dark:border-gray-700 p-4 content-center">
        {["Professional", "Educational"].map((section) => {
          const items = filteredByType(
            section as "Professional" | "Educational"
          );
          const isOpen = openSection === section;
          return (
            <div key={section} className="mb-4">
              <button
                onClick={() => setOpenSection(isOpen ? null : (section as any))}
                className="flex items-center justify-between w-full font-semibold text-lg py-2"
              >
                {section}
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="overflow-hidden"
                >
                  {items.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedId(item.id)}
                      className={`cursor-pointer px-3 py-2 rounded-md my-1 transition-colors text-sm ${
                        selectedId === item.id
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {item.label}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* RIGHT DETAIL PANEL */}
      <div className="md:w-2/3 p-6 overflow-y-auto">
        {selected ? (
          <div className="space-y-3">
            <div className="text-sm text-gray-500">{selected.type}</div>
            <h2 className="text-2xl font-bold">{selected.label}</h2>
            <p className="text-lg font-medium">{selected.title}</p>
            <div className="text-sm text-gray-600">
              {selected.startDate} – {selected.endDate} · {selected.duration}
            </div>
            <div className="text-sm text-gray-600">{selected.location}</div>
            <div className="text-sm text-gray-600">
              {selected.experienceType}
            </div>
            <p className="text-base mt-2 whitespace-pre-line">
              {selected.description}
            </p>
          </div>
        ) : (
          <div className="text-center text-gray-400">
            Select an item to see details
          </div>
        )}
      </div>
    </div>
  );
}
