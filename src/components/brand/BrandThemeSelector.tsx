import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Palette, Check } from 'lucide-react';
import { BrandThemeColor, COLOR_DISPLAY_NAMES, THEME_COLOR_MAP, applyBrandTheme } from '@/lib/theme-config';
import { useBrand } from '@/lib/brand-context';

interface BrandThemeSelectorProps {
  brandId: string;
  currentTheme: BrandThemeColor;
  disabled?: boolean;
  onThemeChange?: (newTheme: BrandThemeColor) => void;
}

export default function BrandThemeSelector({ 
  brandId, 
  currentTheme, 
  disabled = false,
  onThemeChange 
}: BrandThemeSelectorProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { refreshBrands, selectedBrand, setSelectedBrand } = useBrand();

  const handleThemeChange = async (newTheme: BrandThemeColor) => {
    if (newTheme === currentTheme || loading) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const res = await fetch('/api/brand/update-theme', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brandId, themeColor: newTheme }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        // Update brand context if this is the selected brand
        if (selectedBrand?.id === brandId) {
          setSelectedBrand({ ...selectedBrand, themeColor: newTheme });
        }
        
        // Refresh brands list
        await refreshBrands();
        
        // Callback for parent component
        if (onThemeChange) {
          onThemeChange(newTheme);
        }
      } else {
        setError(data.error || 'Failed to update theme');
      }
    } catch (err) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Get color swatch style
  const getColorStyle = (color: BrandThemeColor) => ({
    backgroundColor: `rgb(${THEME_COLOR_MAP[color].primary})`,
  });

  return (
    <div className="flex flex-col gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            size="sm" 
            disabled={disabled || loading}
            className="w-fit"
          >
            <Palette className="w-4 h-4 mr-2" />
            <div 
              className="w-4 h-4 rounded-full mr-2 border border-gray-300"
              style={getColorStyle(currentTheme)}
            />
            {COLOR_DISPLAY_NAMES[currentTheme]}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 max-h-80 overflow-y-auto">
          <div className="p-2">
            <div className="text-sm font-medium mb-2">Choose Theme Color</div>
            <div className="grid grid-cols-3 gap-1">
              {Object.entries(COLOR_DISPLAY_NAMES).map(([colorKey, displayName]) => {
                const color = colorKey as BrandThemeColor;
                const isSelected = color === currentTheme;
                
                return (
                  <DropdownMenuItem
                    key={color}
                    onClick={() => handleThemeChange(color)}
                    className="flex flex-col items-center gap-1 p-2 h-auto cursor-pointer"
                    disabled={loading}
                  >
                    <div className="relative">
                      <div
                        className="w-8 h-8 rounded-full border-2 border-gray-200"
                        style={getColorStyle(color)}
                      />
                      {isSelected && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-center">{displayName}</span>
                  </DropdownMenuItem>
                );
              })}
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      
      {error && (
        <div className="text-red-600 text-xs">{error}</div>
      )}
      
      {loading && (
        <div className="text-muted-foreground text-xs">Updating theme...</div>
      )}
    </div>
  );
} 