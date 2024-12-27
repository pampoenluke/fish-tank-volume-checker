import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface RectangularTankProps {
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  unit: string;
  onDimensionChange: (dimension: string, value: string) => void;
}

const RectangularTank: React.FC<RectangularTankProps> = ({
  dimensions,
  unit,
  onDimensionChange,
}) => {
  return (
    <>
      <div>
        <Label>Length ({unit})</Label>
        <Input
          type="number"
          value={dimensions.length}
          onChange={(e) => onDimensionChange('length', e.target.value)}
          placeholder={`Enter length in ${unit}`}
        />
      </div>
      <div>
        <Label>Width ({unit})</Label>
        <Input
          type="number"
          value={dimensions.width}
          onChange={(e) => onDimensionChange('width', e.target.value)}
          placeholder={`Enter width in ${unit}`}
        />
      </div>
      <div>
        <Label>Height ({unit})</Label>
        <Input
          type="number"
          value={dimensions.height}
          onChange={(e) => onDimensionChange('height', e.target.value)}
          placeholder={`Enter height in ${unit}`}
        />
      </div>
    </>
  );
};

export default RectangularTank;