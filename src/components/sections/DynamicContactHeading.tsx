"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

function HeadingInner() {
    const searchParams = useSearchParams();
    const serviceQuery = searchParams.get("service");
    
    const dynamicTitle = serviceQuery ? `Enquiry for ${serviceQuery}` : "Contact Us";

    return (
        <SectionHeader
            subtitle="Send Us a Message"
            title={dynamicTitle}
            centered={false}
        />
    );
}

export default function DynamicContactHeading() {
    return (
        <Suspense fallback={
            <SectionHeader
                subtitle="Send Us a Message"
                title="Contact Us"
                centered={false}
            />
        }>
            <HeadingInner />
        </Suspense>
    );
}
