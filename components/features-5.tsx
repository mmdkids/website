import { Activity, DraftingCompass, Mail, Zap } from 'lucide-react'
import Image from 'next/image'

export default function Philosophy() {
    return (
        <section className="py-16 md:py-32 bg-accent">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="max-w-2xl font-fredoka text-balance text-5xl font-medium md:text-6xl">Masterminds Philosophy</h2>
                            <p className="mt-6 text-neutral-800 my-8 max-w-2xl text-balance text-xl">Our Philosophy is children learn best through play, exploration, and meaningful relationships. Our approach is:</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3 text-neutral-700 my-8 max-w-2xl text-balance text-xl">
                            <li>
                                
                                Play-Based: Encouraging creativity, problem-solving, and social skills.
                            </li>
                            <li>
                                
                                Holistic: Supporting emotional, physical, and cognitive development.
                            </li>
                            <li>
                                
                                Responsive: Adapting to each child’s unique needs and interests.
                            </li>
                            <li>
                                
                                Collaborative: Partnering with families to support every child’s journey.
                            </li>
                        </ul>
                    </div>
                    <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/blocks/child.png" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                            <Image src="/blocks/child.png" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
