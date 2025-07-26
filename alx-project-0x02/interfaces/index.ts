// interfaces/index.ts

export interface UserProps {
  id: string;
  name: string;
  email: string;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface PostProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: PostProps) => void;
}

export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
}
