type DocumentItem = {
  id: number;
  section: string;
  name: string;
  files?: Record<FileKey, string>;
  steps: Step[];
};

type Step = {
  text: string;
  highlights?: string[];
  downloads?: FileKey[];
  code?: {
    language?: string;
    value: string;
  };
};
