import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Greenity Corporation",
    description: "Get in touch with Greenity Corporation. Reach us at sales@greenitycorp.kr or call 1877-3427.",
    openGraph: {
        title: "Contact | Greenity Corporation",
        description: "Get in touch with Greenity Corporation. Reach us at sales@greenitycorp.kr or call 1877-3427.",
        siteName: "Greenity Corporation",
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
