import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useRef, useEffect } from "react";

const Team = () => {
  // Auto-scroll effect every 3 seconds and loop
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollInterval = setInterval(() => {
      if (!scrollContainer) return;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      // If at or near the end, scroll back to start
      if (Math.ceil(scrollContainer.scrollLeft + scrollByAmount) >= maxScroll) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({ left: scrollByAmount, behavior: "smooth" });
      }
    }, 5000);
    return () => clearInterval(scrollInterval);
  }, []);
  const teamMembers = [
    {
      id: 1,
      name: "Ankita Borgohain",
      position: "Chief Executive Officer (CEO)",
      phone: "9957891520",
      email: "ankitaborgohain95@gmail.com",
      image: "/img/team_ankita_borgohain.jpg"
    },
    {
      id: 2,
      name: "Anantika Mishra",
      position: "Chief Operating Officer (COO)",
      phone: "936412960",
      email: "anantikam878@gmail.com",
      image: "/img/team_anantika.jpg"
    },
    {
      id: 3,
      name: "Indroseng Singpho",
      position: "Chief Marketing Officer",
      phone: "9707317546",
      email: "indroseng123@gmai.com",
      image: "/img/team_indroseng_singpho.jpg"
    },
    {
      id: 4,
      name: "Tonmoy Paul",
      position: "Chief Financial Officer",
      phone: "6901654961",
      email: "paultonmoy922@gmail.com",
      image: "/img/team_tonmoy_paul.jpg"
    },
    {
      id: 5,
      name: "Abhoy Das",
      position: "Chief Technology Officer",
      phone: "8822158445",
      email: "abhoy3214@gmail.com",
      image: "/img/team_abhoy_das.jpg"
    },
    {
      id: 6,
      name: "Rajkamal Das",
      position: "Product Head",
      phone: "6026690695",
      email: "dasrajkamal049@gmail.com",
      image: "/img/team_rajkamal_das.jpg"
    },
    {
      id: 7,
      name: "Dhananjay Kushwaha",
      position: "Sales Head",
      phone: "6002517575",
      email: "dhananjayprasadprasad0@gmail.com ",
      image: "/img/team_dhananjay_kushwaha.jpg"
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollByAmount = 355; // px


  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollByAmount, behavior: "smooth" });
    }
  };

  // Hide scrollbar utility
  const hideScrollbar =
    "scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']";

  return (
    <section id="team" className="py-section bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Team
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Meet the passionate experts who make every product 
            at Aromas & Cuidado possible, combining science and nature.
          </p>
        </div>

        {/* Team Horizontal Scroll with Simple Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            aria-label="Scroll left"
            onClick={scrollLeft}
            className="flex items-center justify-center absolute left-[-16px] top-1/2 -translate-y-1/2 z-20 bg-white text-primary border border-primary rounded-full p-2 shadow-lg transition-all hover:bg-primary hover:text-white"
            type="button"
            style={{ boxShadow: "0 2px 16px 0 rgba(0,0,0,0.18)" }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          {/* Right Arrow */}
          <button
            aria-label="Scroll right"
            onClick={scrollRight}
            className="flex items-center justify-center absolute right-[-16px] top-1/2 -translate-y-1/2 z-20 bg-white text-primary border border-primary rounded-full p-2 shadow-lg transition-all hover:bg-primary hover:text-white"
            type="button"
            style={{ boxShadow: "0 2px 16px 0 rgba(0,0,0,0.18)" }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <div
            ref={scrollRef}
            className={`overflow-x-auto ${hideScrollbar}`}
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="flex gap-8 pb-4 md:pb-8">
              {teamMembers.map((member) => (
                <Card
                  key={member.id}
                  className="min-w-[85vw] max-w-[90vw] sm:min-w-[320px] sm:max-w-xs flex-shrink-0 group bg-card border-0 shadow-soft hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-1 overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-[300px] sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{
                        width: "100%",
                        minWidth: "100%",
                        maxWidth: "100%",
                        objectFit: "cover"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6 text-center space-y-3">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="font-body text-primary font-medium">
                      {member.position}
                    </p>
                    {member.phone && (
                      <p className="font-body text-sm text-muted-foreground">
                        <span className="font-semibold">Phone:</span> {member.phone}
                      </p>
                    )}
                    <p className="font-body text-sm text-muted-foreground">
                      <span className="font-semibold">Email:</span> {member.email}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Team Values */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-luxury rounded-2xl p-8 md:p-12">
            <h3 className="font-display text-3xl font-bold text-luxury-foreground mb-6">
              Our Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🌿</span>
                </div>
                <h4 className="font-body font-semibold text-luxury-foreground">Nature</h4>
                <p className="font-body text-sm text-luxury-foreground/80">
                  100% natural and sustainable ingredients
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🔬</span>
                </div>
                <h4 className="font-body font-semibold text-luxury-foreground">Science</h4>
                <p className="font-body text-sm text-luxury-foreground/80">
                  Advanced scientific research and development
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">💎</span>
                </div>
                <h4 className="font-body font-semibold text-luxury-foreground">Quality</h4>
                <p className="font-body text-sm text-luxury-foreground/80">
                  Excellence in every detail and process
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;