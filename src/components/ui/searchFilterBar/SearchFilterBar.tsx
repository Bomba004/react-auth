// src/components/ui/searchFilterBar/SearchFilterBar.tsx
import React from 'react';
import { FaSearch, IoIosClose } from "@/utils/alias-Image-Icons";
import { useTranslation } from '@/utils/alias';

interface SearchFilterBarProps {
  label?: string|null;
  placeholder?: string|null;
  value: string;
  onChange: (value: string) => void;
}

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  const { t } = useTranslation();

  return (
    <div className="field__container">
      <label htmlFor="search-input" className="field__label">{label||t('components.SearchFilterBar.title')}</label>
      <input
        id="search-input"
        type="text"
        placeholder={placeholder||t('components.SearchFilterBar.placeholder')}
        className="field__input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button className="btn-none" onClick={() => onChange('')}>
          <IoIosClose className="size-[1.3em]" />
        </button>
      )}
      <button className="btn-none" onClick={() => onChange(value)}>
        <FaSearch className="size-[1em]" />
      </button>
    </div>
  );
};

export default SearchFilterBar;
