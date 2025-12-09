import { Card } from '@/components/ui/card'
import Image from 'next/image'


export default function Mission() {
    return (
        <section>
            <div className=" py-20">
                <div className="mx-auto w-full px-6">
                    <div>
                        {/* <h2 className="text-foreground text-4xl md:text-6xl font-semibold">We are Masterminds Daycare</h2> */}
                        <p className="text-muted-foreground mb-12 mt-4 text-balance text-3xl">
                            We believe every child is a little genius in the making. 
                            As a locally operated nonprofit daycare in Lethbridge, Alberta, 
                            we&apos;re committed to nurturing young minds through play, compassion, 
                            and community connection.  

                            Our daycare is more than a place to learn—it&apos;s a place to belong. 
                            As a nonprofit, every dollar we receive goes directly 
                            into enriching our programs, supporting our staff, and creating 
                            a joyful learning environment. We&apos;re proud to serve families with 
                            affordable care that never compromises on quality.
                        </p>
                    </div>

                    <div className="border-foreground/10 relative mt-16 grid gap-20 pb-12 [--radius:1rem] md:grid-cols-2">
                        <div>
                            <h3 className="text-foreground text-2xl font-semibold">Our Mission</h3>
                            <p className="text-muted-foreground my-4 text-xl">To provide a safe, inclusive, and enriching environment where children are empowered to explore, grow, and thrive through caring educators and a strong community.</p>
                            <Card
                                className="aspect-video overflow-hidden px-6"
                                >
                                 <Image
                                    src="/mm/mmkids.png"
                                    alt="Father and child"
                                    width={1207} height={929}
                                    className="rounded-lg shadow-lg"
                                />
                            </Card>
                        </div>
                        <div>
                            <h3 className="text-foreground text-2xl font-semibold">Our Vision</h3>
                            <p className="text-muted-foreground my-4 text-xl">We envision a future where every child in Lethbridge has access to high-quality early learning, regardless of background. We strives to be a beacon of excellence, equity, and joy in childcare.</p>
                            <Card
                                className="aspect-video overflow-hidden px-6"
                                >
                                  
                                <Image
                                    src="/mm/mmkids.png"
                                    alt="Father and child"
                                    width={1207} height={929}
                                    className="rounded-lg shadow-lg w-full"
                                />
                                              
                            </Card>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}