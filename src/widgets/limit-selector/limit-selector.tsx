'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select';

interface LimitSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

export function LimitSelector({ value, onChange }: LimitSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <Select
        onValueChange={(val) => onChange(Number(val))}
        defaultValue={value.toString()}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="9">9</SelectItem>
          <SelectItem value="18">18</SelectItem>
          <SelectItem value="27">27</SelectItem>
          <SelectItem value="36">36</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
