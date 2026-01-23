import { useState, useRef } from "react";
import { Phone, Loader2, Upload, X, ImageIcon, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface UploadedFile {
  file: File;
  preview: string;
  type: 'image' | 'video';
}

const CallbackFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [selectedService, setSelectedService] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles: UploadedFile[] = [];
    
    Array.from(files).forEach((file) => {
      if (uploadedFiles.length + newFiles.length >= 5) {
        toast({
          title: "Maximum files reached",
          description: "You can upload up to 5 files.",
          variant: "destructive",
        });
        return;
      }

      const isImage = file.type.startsWith('image/');
      const isVideo = file.type.startsWith('video/');
      
      if (!isImage && !isVideo) {
        toast({
          title: "Invalid file type",
          description: "Please upload only images or videos.",
          variant: "destructive",
        });
        return;
      }

      const preview = URL.createObjectURL(file);
      newFiles.push({
        file,
        preview,
        type: isImage ? 'image' : 'video',
      });
    });

    setUploadedFiles((prev) => [...prev, ...newFiles]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => {
      const newFiles = [...prev];
      URL.revokeObjectURL(newFiles[index].preview);
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Request Received!",
      description: "We'll call you back within 10 minutes.",
    });
    
    // Clean up previews
    uploadedFiles.forEach((file) => URL.revokeObjectURL(file.preview));
    setUploadedFiles([]);
    setSelectedService("");
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="callback-form" className="py-12 sm:py-16 lg:py-28">
      <div className="container px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-10">
              <span className="inline-block text-xs sm:text-sm font-semibold text-emergency-red uppercase tracking-wider mb-3 sm:mb-4">
                Get Help Fast
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Need Help Fast? Request a Call Back
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Submit your details and we'll call you back within 10 minutes.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="name" className="text-xs sm:text-sm font-medium">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    required
                    className="h-11 sm:h-12 bg-secondary/50 border-border text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="phone" className="text-xs sm:text-sm font-medium">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="07xxx xxxxxx"
                    required
                    className="h-11 sm:h-12 bg-secondary/50 border-border text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label htmlFor="postcode" className="text-xs sm:text-sm font-medium">
                  Postcode
                </label>
                <Input
                  id="postcode"
                  name="postcode"
                  placeholder="PE1 1AA"
                  className="h-11 sm:h-12 bg-secondary/50 border-border text-sm sm:text-base"
                />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label htmlFor="service" className="text-xs sm:text-sm font-medium">
                  Select Service
                </label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger className="h-11 sm:h-12 bg-secondary/50 border-border text-sm sm:text-base">
                    <SelectValue placeholder="Choose a service..." />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-700 text-white z-[100]">
                    <SelectItem value="home-repairs">Home Repairs</SelectItem>
                    <SelectItem value="furniture-assembly">Furniture Assembly</SelectItem>
                    <SelectItem value="painting-decorating">Painting & Decorating</SelectItem>
                    <SelectItem value="flooring-installation">Flooring Installation</SelectItem>
                    <SelectItem value="doors-windows">Doors & Windows</SelectItem>
                    <SelectItem value="garden-outdoor">Garden & Outdoor</SelectItem>
                    <SelectItem value="tv-mounting">TV Mounting & Installation</SelectItem>
                    <SelectItem value="shelving-storage">Shelving & Storage</SelectItem>
                    <SelectItem value="plumbing-repairs">Plumbing Repairs</SelectItem>
                    <SelectItem value="general-maintenance">General Maintenance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label htmlFor="issue" className="text-xs sm:text-sm font-medium">
                  Describe Your Issue (Optional)
                </label>
                <Textarea
                  id="issue"
                  name="issue"
                  placeholder="e.g., Burst pipe in kitchen, water everywhere..."
                  rows={4}
                  className="bg-secondary/50 border-border resize-none text-sm sm:text-base"
                />
              </div>

              {/* File Upload Section */}
              <div className="space-y-3">
                <label className="text-xs sm:text-sm font-medium">
                  Upload Photos/Videos of Your Issue (Optional)
                </label>
                
                <div 
                  className="border-2 border-dashed border-border rounded-xl p-4 sm:p-6 text-center bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,video/*"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Images & Videos (Max 5 files)
                  </p>
                </div>

                {/* Preview uploaded files */}
                {uploadedFiles.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                    {uploadedFiles.map((file, index) => (
                      <div 
                        key={index} 
                        className="relative group rounded-lg overflow-hidden bg-secondary/50 aspect-square"
                      >
                        {file.type === 'image' ? (
                          <img
                            src={file.preview}
                            alt={`Upload ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-secondary">
                            <Video className="w-8 h-8 text-muted-foreground" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFile(index);
                            }}
                            className="p-2 bg-emergency-red rounded-full hover:bg-emergency-red/80 transition-colors"
                          >
                            <X className="w-4 h-4 text-white" />
                          </button>
                        </div>
                        <div className="absolute bottom-1 left-1">
                          {file.type === 'image' ? (
                            <ImageIcon className="w-4 h-4 text-white drop-shadow-md" />
                          ) : (
                            <Video className="w-4 h-4 text-white drop-shadow-md" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button
                type="submit"
                variant="emergency"
                size="xl"
                className="w-full text-sm sm:text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    Request Call Back
                  </>
                )}
              </Button>

              <p className="text-center text-xs sm:text-sm text-muted-foreground">
                We'll call you back within 10 minutes, 24/7.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallbackFormSection;
