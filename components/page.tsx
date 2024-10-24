"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Leaf,
  MapPin,
  Calendar,
  BookOpen,
  Facebook,
  Twitter,
  Instagram,
  Menu,
} from "lucide-react";

export function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      {/* Header con Navbar */}
      <header className="bg-green-600 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold flex items-center">
              <Leaf className="mr-2" />
              EcoReciclaCo
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link href="/como-reciclar" className="hover:text-green-200">
                Cómo Reciclar
              </Link>
              <Link href="/noticias" className="hover:text-green-200">
                Noticias
              </Link>
            </nav>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                className="bg-green-500 hover:bg-green-400 text-white"
              >
                Registro
              </Button>
              <Button
                variant="outline"
                className="bg-green-500 hover:bg-green-400 text-white"
              >
                Iniciar Sesión
              </Button>
            </div>
          </div>
        </div>
      </header>
      <section className="relative mb-12 text-center overflow-hidden">
        {/* GIF de fondo */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.tenor.com/3DoLXLHOndYAAAAC/funny-animals-earth-day.gif"
            alt="Fondo de reciclaje en acción"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Capa de degradado para hacer el texto legible */}
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

        {/* Contenido del banner (con el texto y el botón) */}
        <div className="relative z-20 p-12">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
            Bienvenido a EcoReciclaCo
          </h1>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
            Juntos podemos hacer la diferencia. Aprende a reciclar correctamente
            y contribuye a un futuro más sostenible.
          </p>
          <Button className="bg-green-600 hover:bg-green-500 text-white text-lg px-8 py-3 rounded-lg shadow-lg">
            Comienza a Reciclar
          </Button>
        </div>
      </section>
      {/* Contenido principal */}
      <main className="flex-grow container mx-auto px-4 py-8 h-full object-cover">
        {/* Contenido principal */}

        {/* Sección: Cómo reciclar correctamente */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center">
            Cómo reciclar correctamente
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Residuos orgánicos",
                color: "green",
                content:
                  "Restos de comida, cáscaras, hojas y otros materiales biodegradables.",
                imgSrc:
                  "https://plus.unsplash.com/premium_photo-1723373960718-c26efde88d6d?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Papel y cartón",
                color: "blue",
                content:
                  "Periódicos, revistas, cajas de cartón y papel de oficina.",
                imgSrc:
                  "https://media.istockphoto.com/id/157335585/es/foto/roto-fondo-cart%C3%B3n.jpg?s=1024x1024&w=is&k=20&c=uVW_fmlJo1FPyNsyw9iBjskRaMW-jbRgctGLmsANsls=",
              },
              {
                title: "Plásticos y envases",
                color: "yellow",
                content:
                  "Botellas de plástico, envases de alimentos y bolsas de plástico limpias.",
                imgSrc:
                  "https://media.istockphoto.com/id/2002225943/es/foto/empty-colored-drink-bottles-recyclable-plastic-waste.jpg?s=1024x1024&w=is&k=20&c=47xAealXWCHPFNUv5fB52-y6_hXH1FRev4a40bIDVU4=",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle
                    className={`text-xl font-semibold text-${item.color}-600`}
                  >
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-gray-700">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sección: Significado de los colores de los contenedores */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center">
            Significado de los colores de los contenedores
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                color: "blue",
                text: "Papel y cartón",
                bgClass: "bg-blue-100",
                circleClass: "bg-blue-500",
              },
              {
                color: "yellow",
                text: "Plásticos y envases",
                bgClass: "bg-yellow-100",
                circleClass: "bg-yellow-500",
              },
              {
                color: "green",
                text: "Vidrio",
                bgClass: "bg-green-100",
                circleClass: "bg-green-500",
              },
              {
                color: "gray",
                text: "Residuos no reciclables",
                bgClass: "bg-gray-100",
                circleClass: "bg-gray-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.bgClass} p-4 rounded-lg text-center`}
              >
                <div
                  className={`w-16 h-16 ${item.circleClass} rounded-full mx-auto mb-2`}
                ></div>
                <p className="font-semibold">
                  {item.color.charAt(0).toUpperCase() + item.color.slice(1)}:{" "}
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Sección: Puntos de recolección y Horarios */}
        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-green-700">
                Puntos de recolección
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Mapa de puntos de recolección"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-700 mb-4">
                Encuentra los puntos de recolección más cercanos a tu ubicación.
              </p>
              <Button className="bg-green-600 hover:bg-green-500 text-white">
                <MapPin className="mr-2" />
                Ver mapa interactivo
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-green-700">
                Horarios de recolección
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Mantente informado sobre los horarios de recolección en tu zona.
              </p>
              <Button className="bg-green-600 hover:bg-green-500 text-white">
                <Calendar className="mr-2" />
                Ver calendario
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Sección: Noticias de reciclaje */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center">
            Noticias de Reciclaje
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Nueva planta de reciclaje abre sus puertas",
                date: "15 de Mayo, 2024",
              },
              {
                title: "Campaña de reciclaje escolar bate récords",
                date: "10 de Mayo, 2024",
              },
              {
                title: "Innovaciones en el reciclaje de plásticos",
                date: "5 de Mayo, 2024",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-green-600">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link
                    href="#"
                    className="text-green-600 hover:underline mt-2 inline-block"
                  >
                    Leer más
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sección: Consejos ambientales */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center">
            Consejos ambientales
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-green-600">
                Últimos consejos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Reduce el uso de plásticos de un solo uso</li>
                <li>Composta tus residuos orgánicos</li>
                <li>Utiliza bolsas reutilizables para tus compras</li>
              </ul>
              <Button className="bg-green-600 hover:bg-green-500 text-white">
                <BookOpen className="mr-2" />
                Ver más consejos
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer simplificado */}
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <h3 className="text-xl font-semibold">EcoReciclaCo</h3>
              <p className="text-sm">Juntos por un futuro más sostenible</p>
            </div>
            <nav className="w-full md:w-auto mb-4 md:mb-0">
              <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
                <li>
                  <Link href="/privacidad" className="hover:text-green-200">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terminos" className="hover:text-green-200">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="/soporte" className="hover:text-green-200">
                    Soporte
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="w-full md:w-auto flex justify-center md:justify-end space-x-4">
              <Link href="#" className="hover:text-green-200">
                <Facebook />
              </Link>
              <Link href="#" className="hover:text-green-200">
                <Twitter />
              </Link>
              <Link href="#" className="hover:text-green-200">
                <Instagram />
              </Link>
            </div>
          </div>
          <div className="border-t border-green-700 mt-6 pt-6 text-sm text-center">
            <p>&copy; 2024 EcoRecicla. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
