import React, { useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface HalfCylindricalTankProps {
  onVolumeChange: (volume: number) => void;
  unit: "gallons" | "liters";
  dimensionUnit: "inches" | "mm";
}

const HalfCylindricalTank: React.FC<HalfCylindricalTankProps> = ({
  onVolumeChange,
  unit,
  dimensionUnit
}) => {
  const [dimensions, setDimensions] = useState({
    diameter: '',
    height: ''
  });

  useEffect(() => {
    const diameter = parseFloat(dimensions.diameter);
    const height = parseFloat(dimensions.height);

    if (diameter && height) {
      // Calculate volume (half cylinder = π * r² * h / 2)
      let volume = (Math.PI * Math.pow(diameter / 2, 2) * height) / 2;
      
      // Convert from mm³ to in³ if needed
      if (dimensionUnit === 'mm') {
        volume = volume / 16387.064;
      }
      
      // Convert to selected volume unit
      const volumeInSelectedUnit = unit === 'gallons' 
        ? volume * 0.004329 // Convert cubic inches to gallons
        : volume * 0.016387; // Convert cubic inches to liters
      
      onVolumeChange(volumeInSelectedUnit);
    }
  }, [dimensions, unit, dimensionUnit, onVolumeChange]);

  return (
    <div className="grid gap-4 p-4">
      <div>
        <Label>Diameter ({dimensionUnit})</Label>
        <Input
          type="number"
          value={dimensions.diameter}
          onChange={(e) => setDimensions(prev => ({ ...prev, diameter: e.target.value }))}
          placeholder={`Enter diameter in ${dimensionUnit}`}
        />
      </div>
      <div>
        <Label>Height ({dimensionUnit})</Label>
        <Input
          type="number"
          value={dimensions.height}
          onChange={(e) => setDimensions(prev => ({ ...prev, height: e.target.value }))}
          placeholder={`Enter height in ${dimensionUnit}`}
        />
      </div>
    </div>
  );
};

export default HalfCylindricalTank;