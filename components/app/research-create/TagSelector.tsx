import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "../../ui/badge";
import { X } from "lucide-react";
import { useState } from "react";

type TagSelectorProps = {
  label: string;
  name: string;
  items: string[];
  selected: string[];
  maxItems?: number;
  onChange: (name: string, newValues: string[]) => void;
};

const TagSelector = ({
  label,
  name,
  items,
  selected,
  maxItems = 5,
  onChange,
}: TagSelectorProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    const trimmed = inputValue.trim();
    if (!trimmed || selected.includes(trimmed) || selected.length > maxItems)
      return;

    onChange(name, [...selected, trimmed]);
    setInputValue("");
  };

  const handleRemove = (tag: string) => {
    onChange(
      name,
      selected.filter((item) => item !== tag)
    );
  };

  const handleSelectFromList = (tag: string) => {
    if (selected.includes(tag)) {
      handleRemove(tag);
    } else if (selected.length < maxItems) {
      onChange(name, [...selected, tag]);
    }
  };

  return (
    <div className="space-y-2">
      <Label>{label} *</Label>
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {selected.map((item) => (
            <Badge
              key={item}
              variant="secondary"
              className="px-2 py-1 flex items-center space-x-2">
              <span className="m-0">{item}</span>
              <button
                onClick={() => handleRemove(item)}
                type="button"
                className="flex items-center justify-center w-5 h-5">
                <X className="w-3 h-3 text-gray-600" />
              </button>
            </Badge>
          ))}
        </div>
      )}
      <div className="flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add technologies (e.g., Technology, Design)"
        />
        <Button onClick={handleAdd} type="button" variant="outline">
          Add
        </Button>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {items.map((item: string) => (
          <Button
            key={item}
            onClick={() => handleSelectFromList(item)}
            type="button"
            variant={selected.includes(item) ? "default" : "outline"}
            className="px-3 py-1 text-xs font-medium rounded-md">
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TagSelector;
