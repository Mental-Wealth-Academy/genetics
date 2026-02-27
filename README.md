# Genetics

**Privacy-first browser-native genomics lab**

## Overview

A fully client-side genomics analysis tool that processes your DNA data without ever uploading it to a server.

- **Browser-native processing** -- all SNP matching and analysis runs in your browser
- **No server uploads** -- your genetic data never leaves your device
- **WebAssembly SQLite** -- queries 110k+ SNPs using sql.js compiled to WASM
- **Genoset detection** -- identifies compound genotype patterns from SNPedia
- **Pharmacogenomics** -- flags drug-gene interactions for clinical awareness

## Privacy Architecture

Every step of the analysis pipeline runs client-side:

- Raw file parsing happens in the main thread
- SNP matching runs in **Web Workers** to keep the UI responsive
- SQLite queries execute via **WebAssembly** (sql.js) in-browser
- Zero server contact for genetic data -- the only network request fetches the public SNPedia database

## Supported Formats

| Provider     | Format       | Detection   |
|-------------|-------------|-------------|
| 23andMe     | .txt / .zip | Auto-detect |
| AncestryDNA | .txt / .zip | Auto-detect |
| MyHeritage  | .csv        | Auto-detect |
| FTDNA       | .csv        | Auto-detect |

All formats are auto-detected from file headers. No manual selection required.

## Stack

- **Next.js** -- App Router with React Server Components
- **sql.js / WebAssembly** -- In-browser SQLite for SNP database queries
- **Web Workers** -- Background threads for SNP matching via Comlink
- **React Virtuoso** -- Virtualized lists for rendering large SNP result sets

## Part of Mental Wealth Academy

This module is part of the [Mental Wealth Academy](https://github.com/MentalWealthAcademy) platform.
