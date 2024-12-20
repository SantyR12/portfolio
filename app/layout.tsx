import type {Metadata} from "next";
import { Providers } from './providers';
import localFont from "next/font/local";
import './globals.css';

const SourGummyMedium = localFont({
  src: './fonts/SourGummy-Medium.ttf',
  variable: '--font-sour-medium',
  weight: '500;',
});
const SourGummyThinItalic = localFont({
  src: './fonts/SourGummy_Expanded-ThinItalic.ttf',
  variable: '--font-sour-thin',
  weight: '100;',
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={` ${SourGummyMedium.variable} ${SourGummyThinItalic.variable} antialised`} >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
