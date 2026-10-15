import type { Metadata } from "next"
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage"
import { CARE_SERVICES } from "@/lib/services"

const service = CARE_SERVICES["grooming"]

export const metadata: Metadata = {
    title: `${service.title} | Pet Shop`,
    description: service.summary,
}

export default function Page() {
    return <ServiceDetailPage service={service} />
}
