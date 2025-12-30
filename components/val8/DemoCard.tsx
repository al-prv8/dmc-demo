import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVal8 } from './Val8Context';
import { FlightWidget } from '@/components/dashboard/FlightWidget';
import { StayWidget } from '@/components/dashboard/StayWidget';
import { RideWidget } from '@/components/dashboard/RideWidget';
import { ActivityWidget } from '@/components/dashboard/ActivityWidget';
import { CheckoutWidget } from '@/components/dashboard/CheckoutWidget';
import { CalendarWidget } from '@/components/dashboard/CalendarWidget';
import { WeatherWidget } from '@/components/dashboard/WeatherWidget';
import { TimezoneWidget } from '@/components/dashboard/TimezoneWidget';
import { DashboardState } from './Dashboard';
import { WidgetDetailView } from './WidgetDetailView';

// Wrapper for animation - simple opacity fade, no layout animation to prevent jumps
const WidgetContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
);

const DEMO_DATA: DashboardState = {
    flight: {
        origin: "JFK",
        destination: "FCO",
        carrier: "Alitalia",
        class: "Business Class",
        date: "June 1 - June 10",
        flightNumber: "AZ 611",
        price: "$4,800"
    },
    stay: {
        hotelName: "Hotel de Russie",
        roomType: "Nijinsky Suite",
        guests: 4,
        checkIn: "June 1",
        checkOut: "June 4",
        price: "$12,400"
    },
    ride: {
        pickup: "Rome Fiumicino (FCO)",
        serviceLevel: "Luxury Mercedes",
        dropoff: "Hotel de Russie, Rome",
        price: "€180"
    },
    weather: {
        unit: 'C',
        alerts: false
    },
    location: {
        current: "Rome, Italy"
    },
    timezone: {
        primary: "Central European Time",
        secondary: "Eastern Time"
    }
};

export const DemoCard: React.FC = () => {
    const { demoStep, demoPhase } = useVal8();
    const [data, setData] = useState<DashboardState>(DEMO_DATA);
    const [selectedWidget, setSelectedWidget] = useState<'flight' | 'stay' | 'ride' | 'calendar' | 'dining' | 'shopping' | 'experience' | 'checkout' | 'weather' | 'location' | 'timezone' | 'scheduling' | null>(null);

    const handleSave = (partialData: Partial<DashboardState>) => {
        setData(prev => ({ ...prev, ...partialData }));
    };

    // Mapping steps to widgets with cumulative logic (6-step Italy demo)
    // Step 0: Initial request (Italy trip)
    // Step 1: Routing overview (Calendar, Weather, Itinerary)
    // Step 2: Hotels shown
    // Step 3: Hotels confirmed
    // Step 4: DMC recommendation applied (transfers)
    // Step 5: Experiences added
    // Step 6: Final confirmation

    const [isCheckoutComplete, setIsCheckoutComplete] = React.useState(false);

    const handleCheckout = () => {
        setIsCheckoutComplete(true);
    };

    return (
        <div className="h-full w-full p-6 overflow-y-auto custom-scrollbar relative">

            <WidgetDetailView
                type={selectedWidget}
                data={data}
                onSave={handleSave}
                onClose={() => setSelectedWidget(null)}
            />

            {/* Success Modal Overlay */}
            <AnimatePresence>
                {isCheckoutComplete && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="glass-card rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center relative overflow-hidden"
                        >
                            {/* Background decoration */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-primary to-emerald-500" />
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />

                            <div className="mb-6 flex justify-center">
                                <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                    <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>

                            <h3 className="text-2xl font-serif text-text-primary dark:text-white mb-2">Itinerary Confirmed</h3>
                            <p className="text-text-secondary dark:text-white/60 text-sm mb-8 leading-relaxed">
                                Your Italy itinerary has been confirmed with Liberty International. They will manage your journey end-to-end.
                            </p>

                            <button
                                onClick={() => setIsCheckoutComplete(false)}
                                className="w-full py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-soft transition-colors"
                            >
                                Done
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Dynamic Grid Container - Mobile Optimized */}
            <div className={`grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-6 auto-rows-max grid-flow-row-dense pb-20 transition-all duration-500 ${isCheckoutComplete ? 'blur-sm grayscale-[0.5]' : ''}`}>
                <AnimatePresence>

                    {/* STEP 1: ITINERARY OVERVIEW - Show routing and weather */}
                    {((demoStep > 1) || (demoStep === 1 && demoPhase === 'responding')) && (
                        <React.Fragment key="overview-fragment">
                            {/* Calendar (Mobile: 1 col, Desktop: 3 cols) */}
                            <WidgetContainer key="calendar" className="col-span-1 md:col-span-12 lg:col-span-3 min-h-[180px] md:min-h-[240px]">
                                <div className="glass-card rounded-3xl overflow-hidden h-full cursor-pointer hover:border-primary/50 transition-all" onClick={() => setSelectedWidget('calendar')}>
                                    <CalendarWidget />
                                </div>
                            </WidgetContainer>

                            {/* Weather (Mobile: 1 col, Desktop: 3 cols) */}
                            <WidgetContainer key="weather" className="col-span-1 md:col-span-12 lg:col-span-3 min-h-[180px] md:min-h-[240px]">
                                <div className="glass-card rounded-3xl overflow-hidden h-full cursor-pointer hover:border-primary/50 transition-all" onClick={() => setSelectedWidget('weather')}>
                                    <WeatherWidget temperature="24" />
                                </div>
                            </WidgetContainer>

                            {/* Itinerary Overview - shows routing */}
                            <WidgetContainer key="itinerary" className="col-span-2 md:col-span-12 lg:col-span-6 min-h-[240px]">
                                <div className="glass-card rounded-3xl overflow-hidden h-full p-6">
                                    <h3 className="text-lg font-serif mb-4" style={{ color: 'var(--foreground)' }}>Draft Itinerary</h3>
                                    <div className="space-y-3 text-sm" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                                        <div className="flex items-center gap-3"><span className="font-medium text-primary">June 1-3</span> Rome (3 nights)</div>
                                        <div className="flex items-center gap-3"><span className="font-medium text-primary">June 4-6</span> Florence (3 nights)</div>
                                        <div className="flex items-center gap-3"><span className="font-medium text-primary">June 7-10</span> Amalfi Coast (4 nights)</div>
                                    </div>
                                    <p className="mt-4 text-xs" style={{ color: 'var(--foreground)', opacity: 0.5 }}>Coordinated by Liberty International</p>
                                </div>
                            </WidgetContainer>
                        </React.Fragment>
                    )}

                    {/* STEP 2-3: HOTELS - Show after hotels mentioned */}
                    {((demoStep > 2) || (demoStep === 2 && (demoPhase === 'processing' || demoPhase === 'responding'))) && (
                        <WidgetContainer key="hotel" className="col-span-2 md:col-span-12 lg:col-span-4 min-h-[240px]">
                            <div className="glass-card rounded-3xl overflow-hidden h-full cursor-pointer hover:border-primary/50 transition-all" onClick={() => setSelectedWidget('stay')}>
                                <StayWidget data={data.stay} />
                            </div>
                        </WidgetContainer>
                    )}

                    {/* STEP 4: TRANSFERS - After DMC recommendation applied */}
                    {((demoStep > 4) || (demoStep === 4 && (demoPhase === 'processing' || demoPhase === 'responding'))) && (
                        <WidgetContainer key="ride" className="col-span-1 md:col-span-12 lg:col-span-4 min-h-[180px] md:min-h-[240px]">
                            <div className="glass-card rounded-3xl overflow-hidden h-full cursor-pointer hover:border-primary/50 transition-all" onClick={() => setSelectedWidget('ride')}>
                                <RideWidget data={data.ride} />
                            </div>
                        </WidgetContainer>
                    )}

                    {/* STEP 5: EXPERIENCES - Fiat 500 tour and closing */}
                    {((demoStep > 5) || (demoStep === 5 && (demoPhase === 'processing' || demoPhase === 'responding'))) && (
                        <WidgetContainer key="experiences" className="col-span-2 md:col-span-12 lg:col-span-8 min-h-[240px]">
                            <div className="glass-card rounded-3xl overflow-hidden h-full cursor-pointer hover:border-primary/50 transition-all" onClick={() => setSelectedWidget('experience')}>
                                <ActivityWidget
                                    title="Vintage Fiat 500 Tour"
                                    subtitle="Tuscany countryside drive"
                                    image="https://images.unsplash.com/photo-1568709518542-fdddc3b68f99?auto=format&fit=crop&q=80&w=800"
                                    category="Experiences"
                                />
                            </div>
                        </WidgetContainer>
                    )}

                    {/* STEP 6: CHECKOUT - Final confirmation */}
                    {demoStep >= 6 && (
                        <WidgetContainer key="checkout" className="col-span-2 md:col-span-12 h-full min-h-[400px]">
                            <div className="glass-card rounded-3xl overflow-hidden h-full cursor-pointer hover:border-primary/50 transition-all" onClick={() => setSelectedWidget('checkout')}>
                                <CheckoutWidget onCheckout={handleCheckout} data={data} />
                            </div>
                        </WidgetContainer>
                    )}



                </AnimatePresence>
            </div>
        </div>
    );
};
