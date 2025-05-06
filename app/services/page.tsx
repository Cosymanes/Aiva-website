import {
  Bot,
  Code,
  Cpu,
  Database,
  FileCode2,
  Fingerprint,
  GraduationCap,
  LayoutDashboard,
  Lightbulb,
  Smartphone,
  TestTube,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactCTA } from "@/components/contact-cta"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                Our Services in <span className="text-aiva-blue">Zimbabwe</span>
              </h1>
              <p className="mb-6 text-lg text-gray-600">
                AIVA Solutions delivers cutting-edge technology services tailored for the Zimbabwean market, combining
                local knowledge with global expertise.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">Get Started</Button>
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-96">
              <div className="absolute right-0 top-0 h-full w-full rounded-lg bg-gradient-to-br from-aiva-blue/20 to-aiva-blue/5 p-8">
                <div className="grid h-full grid-cols-2 grid-rows-2 gap-4">
                  {[Code, Bot, Smartphone, Database].map((Icon, i) => (
                    <div key={i} className="flex items-center justify-center rounded-md bg-white/80 p-4 shadow-sm">
                      <Icon className="h-12 w-12 text-aiva-blue" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hexagon pattern background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 w-full overflow-hidden">
          <div className="absolute -bottom-8 left-0 right-0 h-16 w-full bg-white"></div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-around">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="h-8 w-8 rotate-45 transform rounded-md bg-aiva-blue/5 border border-aiva-blue/10"
                style={{ marginLeft: `${Math.random() * 2}rem` }}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AIVA Stands Out */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Why AIVA Stands Out in Zimbabwe</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-aiva-blue/10 bg-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Local Knowledge + Global Expertise</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  We combine deep understanding of local challenges with international best practices.
                </CardContent>
              </Card>
              <Card className="border-aiva-blue/10 bg-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">AI-First Approach</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  Not just software, but intelligent solutions that learn and adapt to your needs.
                </CardContent>
              </Card>
              <Card className="border-aiva-blue/10 bg-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Connectivity-Optimized</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  Solutions designed to work reliably in connectivity-challenged environments.
                </CardContent>
              </Card>
              <Card className="border-aiva-blue/10 bg-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Cost-Effective Delivery</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  Agile and innovative delivery models that maximize value for Zimbabwean businesses.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Our Services</h2>

          <Tabs defaultValue="software" className="w-full">
            <TabsList className="mx-auto mb-8 grid max-w-3xl grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="software">Software</TabsTrigger>
              <TabsTrigger value="ai">AI Solutions</TabsTrigger>
              <TabsTrigger value="mobile">Web & Mobile</TabsTrigger>
              <TabsTrigger value="other">Other Services</TabsTrigger>
            </TabsList>

            <TabsContent value="software" className="mt-4">
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="border-aiva-blue/10 bg-white">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-aiva-blue/10 text-aiva-blue">
                      <FileCode2 className="h-6 w-6" />
                    </div>
                    <CardTitle>Custom Software Development</CardTitle>
                    <CardDescription>Tailored software systems for Zimbabwean industries</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Solutions for construction, logistics, education, health, and government sectors</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Boosting efficiency and productivity through digitization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Enterprise resource planning (ERP) systems</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-aiva-blue/10 bg-white">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-aiva-blue/10 text-aiva-blue">
                      <Cpu className="h-6 w-6" />
                    </div>
                    <CardTitle>DevOps & Infrastructure Optimization</CardTitle>
                    <CardDescription>Modernizing how local teams build and manage software</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>CI/CD pipelines for faster and more reliable deployments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Containerized applications for consistent environments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Cloud deployments ensuring scalable services</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-aiva-blue/10 bg-white">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-aiva-blue/10 text-aiva-blue">
                      <TestTube className="h-6 w-6" />
                    </div>
                    <CardTitle>Quality Assurance and Testing</CardTitle>
                    <CardDescription>
                      Ensuring reliable applications for local and international markets
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Automated testing frameworks for continuous quality</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Manual testing services for complex scenarios</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Performance and security testing for robust applications</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-aiva-blue/10 bg-white">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-aiva-blue/10 text-aiva-blue">
                      <Lightbulb className="h-6 w-6" />
                    </div>
                    <CardTitle>Digital Transformation Advisory</CardTitle>
                    <CardDescription>Strategic consulting for organizations across Zimbabwe</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Ministries and councils digitizing public services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>SMEs automating business operations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>NGOs looking to streamline reporting and monitoring</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="ai" className="mt-4">
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="border-aiva-blue/10 bg-white">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-aiva-blue/10 text-aiva-blue">
                      <Bot className="h-6 w-6" />
                    </div>
                    <CardTitle>AI / Machine Learning / Generative AI</CardTitle>
                    <CardDescription>Intelligent systems that learn, adapt, and generate results</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Tender bid optimization using AI</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Automated bill of quantities (BOQ) for construction projects</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Chatbots for local customer service automation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>AI models for predicting crop yields or stock patterns</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-aiva-blue/10 bg-white">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-aiva-blue/10 text-aiva-blue">
                      <Fingerprint className="h-6 w-6" />
                    </div>
                    <CardTitle>AI + Hardware Integration</CardTitle>
                    <CardDescription>Smart IoT-enabled systems for Zimbabwean contexts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Energy monitoring solutions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Smart irrigation for farms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>School attendance + facial recognition systems</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Edge AI for rural environments</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="mobile" className="mt-4">
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="border-aiva-blue/10 bg-white">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-aiva-blue/10 text-aiva-blue">
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <CardTitle>Web and Mobile App Development</CardTitle>
                    <CardDescription>High-performance apps tailored for Zimbabwean needs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Apps for Zimbabwean SMEs and government portals</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>E-learning platforms optimized for local connectivity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Service-based business applications (real estate, transport, resellers)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-aiva-blue/10 bg-white">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-aiva-blue/10 text-aiva-blue">
                      <LayoutDashboard className="h-6 w-6" />
                    </div>
                    <CardTitle>UI / UX Design with Local Flavor</CardTitle>
                    <CardDescription>Intuitive and culturally relevant interfaces</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Mobile money tools designed for local users</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Business dashboards that resonate with Zimbabwean users</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>User research and testing with local participants</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="other" className="mt-4">
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="border-aiva-blue/10 bg-white">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-aiva-blue/10 text-aiva-blue">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <CardTitle>Capacity Building & Tech Skilling</CardTitle>
                    <CardDescription>Empowering Zimbabweans with in-demand tech skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Short courses and bootcamps in AI & ML</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Python programming and embedded systems training</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Corporate training in software development & cloud computing</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-aiva-blue/10 bg-white">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-aiva-blue/10 text-aiva-blue">
                      <Users className="h-6 w-6" />
                    </div>
                    <CardTitle>Partnerships & Collaboration</CardTitle>
                    <CardDescription>Working together to build Zimbabwe's tech ecosystem</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Academic partnerships with local universities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-aiva-blue"></span>
                        <span>Tech community building and knowledge sharing</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection subtitle="Hear from organizations across Zimbabwe who have transformed their operations with AIVA Solutions" />

      {/* Contact CTA Section */}
      <ContactCTA
        title="Let's Discuss Your Project"
        description="Ready to start your digital transformation journey? Get in touch with our team to discuss how we can help."
        showForm={true}
      />

      <SiteFooter />
    </div>
  )
}
