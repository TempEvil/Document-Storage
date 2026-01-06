type DocumentItem = {
  id: number;
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
