export type KPICategory = 
  | 'marketing' 
  | 'clinical' 
  | 'operations' 
  | 'quality' 
  | 'finance';

export enum BenchmarkStatus {
  EXCELLENT = 'excellent',
  GOOD = 'good',
  WARNING = 'warning',
  CRITICAL = 'critical',
  NEUTRAL = 'neutral' // When no data
}

export interface InputField {
  key: string;
  label: string;
  unit?: string;
  placeholder?: string;
  description?: string;
}

export interface KPI {
  id: string;
  title: string;
  description: string;
  category: KPICategory;
  inputs: InputField[];
  // Function that takes a map of input values and returns the calculated KPI
  calculate: (values: Record<string, number>) => number | null;
  // Function to determine status based on result
  getStatus: (value: number) => BenchmarkStatus;
  // String formatting for the result (e.g., "€", "%")
  format: (value: number) => string;
  benchmarkText: string; // Text description of the target (e.g., "> 85%")
}

export interface StoredData {
  [kpiId: string]: Record<string, number>;
}