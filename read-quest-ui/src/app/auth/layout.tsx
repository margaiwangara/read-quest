import { PageWrapper } from './components';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return <PageWrapper>{children}</PageWrapper>;
}
