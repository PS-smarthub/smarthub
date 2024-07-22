"use client";

import { Project } from "@/types/project";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export default function Table() {
  const { data: projects } = useQuery<Project[] | null>({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3030/projects");

      return response.data;
    },
  });

  return (
    <div className="overflow-y-auto max-h-96">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-black">
          <tr>
            <th className="w-1/3 py-2 px-4 text-start">Nome</th>
            <th className="w-1/3 py-2 px-4 text-start">Número do projeto</th>
            <th className="w-1/3 py-2 px-4 text-start">Cliente</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((project) => (
            <tr
              key={project.number}
              className="bg-gray-100 border-b hover:bg-gray-300"
            >
              <td className="py-2 px-4">{project.name}</td>
              <td className="py-2 px-4">{project.number}</td>
              <td className="py-2 px-4">{project.client}</td>
            </tr>
          ))}

          {/* <tr className="bg-gray-100 border-b hover:bg-gray-200">
            <td className="py-2 px-4">Row 1, Cell 1</td>
            <td className="py-2 px-4">Row 1, Cell 2</td>
            <td className="py-2 px-4">Row 1, Cell 3</td>
          </tr>
          <tr className="bg-white border-b hover:bg-gray-200">
            <td className="py-2 px-4">Row 2, Cell 1</td>
            <td className="py-2 px-4">Row 2, Cell 2</td>
            <td className="py-2 px-4">Row 2, Cell 3</td>
          </tr>
          <tr className="bg-gray-100 border-b hover:bg-gray-200">
            <td className="py-2 px-4">Row 3, Cell 1</td>
            <td className="py-2 px-4">Row 3, Cell 2</td>
            <td className="py-2 px-4">Row 3, Cell 3</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
