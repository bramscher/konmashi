'use client'
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { THEME_COLOR_MAP } from '@/lib/theme-config';
import { Palette, Type, Image, FileText, Mic, Folder, Lightbulb } from 'lucide-react';

interface Brand {
  id: string;
  name: string;
  themeColor: string;
  identity?: {
    industry?: string;
    voiceDescriptors?: string[];
    targetAudience?: string;
    brandManifesto?: string;
  };
}

interface BrandCanvasProps {
  selectedBrand: Brand | null;
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

export default function BrandCanvas({ selectedBrand, selectedTab, onTabChange }: BrandCanvasProps) {
  if (!selectedBrand) {
    return (
      <Card className="h-full">
        <CardContent className="flex flex-col items-center justify-center h-full p-8">
          <div className="text-center">
            <Palette className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Brand Kit & Asset Library</h3>
            <p className="text-muted-foreground">
              Select a brand from the left to view its theme, design kit, and asset library.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Get brand theme colors
  const themeColors = THEME_COLOR_MAP[selectedBrand.themeColor as keyof typeof THEME_COLOR_MAP];
  const primaryColor = themeColors ? `rgb(${themeColors.primary})` : '#ef4444';

  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div 
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: primaryColor }}
          >
            <span className="text-white font-bold text-sm">{selectedBrand.name[0]}</span>
          </div>
          <div>
            <CardTitle className="text-lg">{selectedBrand.name}</CardTitle>
            <p className="text-sm text-muted-foreground">Brand Kit & Asset Library</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <Tabs value={selectedTab} onValueChange={onTabChange} className="h-full">
          <div className="px-6 border-b">
            <TabsList className="grid grid-cols-4 lg:grid-cols-8 gap-1 h-auto p-1">
              <TabsTrigger value="colors" className="flex flex-col items-center gap-1 py-2">
                <Palette className="w-4 h-4" />
                <span className="text-xs">Colors</span>
              </TabsTrigger>
              <TabsTrigger value="logos" className="flex flex-col items-center gap-1 py-2">
                <Image className="w-4 h-4" />
                <span className="text-xs">Logos</span>
              </TabsTrigger>
              <TabsTrigger value="typography" className="flex flex-col items-center gap-1 py-2">
                <Type className="w-4 h-4" />
                <span className="text-xs">Typography</span>
              </TabsTrigger>
              <TabsTrigger value="imagery" className="flex flex-col items-center gap-1 py-2">
                <Image className="w-4 h-4" />
                <span className="text-xs">Imagery</span>
              </TabsTrigger>
              <TabsTrigger value="templates" className="flex flex-col items-center gap-1 py-2">
                <FileText className="w-4 h-4" />
                <span className="text-xs">Templates</span>
              </TabsTrigger>
              <TabsTrigger value="voice" className="flex flex-col items-center gap-1 py-2">
                <Mic className="w-4 h-4" />
                <span className="text-xs">Voice</span>
              </TabsTrigger>
              <TabsTrigger value="design" className="flex flex-col items-center gap-1 py-2">
                <Lightbulb className="w-4 h-4" />
                <span className="text-xs">Design Kit</span>
              </TabsTrigger>
              <TabsTrigger value="library" className="flex flex-col items-center gap-1 py-2">
                <Folder className="w-4 h-4" />
                <span className="text-xs">Library</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="p-6 h-full">
            <TabsContent value="colors" className="mt-0">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Color Palette</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Primary Color</h4>
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-12 h-12 rounded-lg border-2 border-gray-200"
                        style={{ backgroundColor: primaryColor }}
                      />
                      <div>
                        <p className="font-mono text-sm">{primaryColor}</p>
                        <Badge variant="secondary">{selectedBrand.themeColor}</Badge>
                      </div>
                    </div>
                  </div>
                  {themeColors && (
                    <>
                      <div>
                        <h4 className="font-medium mb-2">Secondary</h4>
                        <div 
                          className="w-12 h-12 rounded-lg border-2 border-gray-200"
                          style={{ backgroundColor: `rgb(${themeColors.secondary})` }}
                        />
                        <p className="font-mono text-sm mt-1">rgb({themeColors.secondary})</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Accent</h4>
                        <div 
                          className="w-12 h-12 rounded-lg border-2 border-gray-200"
                          style={{ backgroundColor: `rgb(${themeColors.accent})` }}
                        />
                        <p className="font-mono text-sm mt-1">rgb({themeColors.accent})</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Muted</h4>
                        <div 
                          className="w-12 h-12 rounded-lg border-2 border-gray-200"
                          style={{ backgroundColor: `rgb(${themeColors.muted})` }}
                        />
                        <p className="font-mono text-sm mt-1">rgb({themeColors.muted})</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="logos" className="mt-0">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Logo Assets</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Image className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Primary Logo</p>
                    <p className="text-xs text-muted-foreground mt-1">SVG, PNG recommended</p>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Image className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Logo Variations</p>
                    <p className="text-xs text-muted-foreground mt-1">Horizontal, vertical, icon</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Upload coming soon...</p>
              </div>
            </TabsContent>
            
            <TabsContent value="typography" className="mt-0">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Typography</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-1">Heading Font</h4>
                    <p className="text-2xl font-bold">The quick brown fox</p>
                    <p className="text-sm text-muted-foreground">Inter, Arial, sans-serif</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Body Font</h4>
                    <p className="text-base">The quick brown fox jumps over the lazy dog.</p>
                    <p className="text-sm text-muted-foreground">Inter, Arial, sans-serif</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Font customization coming soon...</p>
              </div>
            </TabsContent>
            
            <TabsContent value="imagery" className="mt-0">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Imagery & Graphics</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center aspect-square">
                      <Image className="w-8 h-8 text-gray-400 mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">Image {i}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Image library coming soon...</p>
              </div>
            </TabsContent>
            
            <TabsContent value="templates" className="mt-0">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Templates</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Social Media Templates</h4>
                    <p className="text-sm text-muted-foreground">Instagram, Facebook, Twitter post templates</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Marketing Materials</h4>
                    <p className="text-sm text-muted-foreground">Flyers, brochures, presentations</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Template library coming soon...</p>
              </div>
            </TabsContent>
            
            <TabsContent value="voice" className="mt-0">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Brand Voice & Messaging</h3>
                {selectedBrand.identity && (
                  <div className="space-y-3">
                    {selectedBrand.identity.voiceDescriptors && (
                      <div>
                        <h4 className="font-medium mb-2">Voice Descriptors</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedBrand.identity.voiceDescriptors.map((descriptor, i) => (
                            <Badge key={i} variant="outline">{descriptor}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedBrand.identity.targetAudience && (
                      <div>
                        <h4 className="font-medium mb-2">Target Audience</h4>
                        <p className="text-sm">{selectedBrand.identity.targetAudience}</p>
                      </div>
                    )}
                    {selectedBrand.identity.brandManifesto && (
                      <div>
                        <h4 className="font-medium mb-2">Brand Manifesto</h4>
                        <div className="prose prose-sm max-w-none">
                          {selectedBrand.identity.brandManifesto}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <p className="text-sm text-muted-foreground">Voice guidelines and messaging framework coming soon...</p>
              </div>
            </TabsContent>
            
            <TabsContent value="design" className="mt-0">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Design Kit & Theme</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-2">Current Theme</h4>
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-6 h-6 rounded"
                        style={{ backgroundColor: primaryColor }}
                      />
                      <span className="font-medium">{selectedBrand.themeColor}</span>
                      <Badge variant="secondary">Applied</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Design Principles</h4>
                    <p className="text-sm text-muted-foreground">
                      Based on your brand identity and {selectedBrand.identity?.industry || 'industry'} standards.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Advanced design kit features coming soon...</p>
              </div>
            </TabsContent>
            
            <TabsContent value="library" className="mt-0">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Asset Library</h3>
                <div className="grid grid-cols-4 gap-4">
                  {['Logos', 'Images', 'Videos', 'Documents'].map((type) => (
                    <div key={type} className="border rounded-lg p-4 text-center">
                      <Folder className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm font-medium">{type}</p>
                      <p className="text-xs text-muted-foreground">0 files</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">File management system coming soon...</p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
} 