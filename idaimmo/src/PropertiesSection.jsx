import React, { useRef, useState } from "react";
import PropertyCard from "./PropertyCard";

export default function PropertiesSection({
  properties, onSelect, allProperties, onFilter,
}) {
  const searchRef = useRef();
  const typeRef = useRef();
  const statusRef = useRef();
  const sortRef = useRef();
  const [page, setPage] = useState(1);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  function filterProperties() {
    let filtered = allProper