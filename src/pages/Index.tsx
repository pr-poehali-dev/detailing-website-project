import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      title: 'Полная мойка и детейлинг',
      description: 'Комплексная очистка кузова, дисков, интерьера с применением премиальных средств',
      price: 'от 5 000 ₽',
      icon: 'Car',
      features: ['Бесконтактная мойка', 'Полировка кузова', 'Химчистка салона', 'Защитные покрытия']
    },
    {
      title: 'Керамическое покрытие',
      description: 'Долговременная защита лакокрасочного покрытия на 2-3 года',
      price: 'от 15 000 ₽',
      icon: 'Shield',
      features: ['Подготовка поверхности', 'Нанесение керамики', 'Гарантия 2 года', 'Гидрофобный эффект']
    },
    {
      title: 'Полировка и реставрация',
      description: 'Устранение царапин, восстановление глубины цвета и блеска',
      price: 'от 8 000 ₽',
      icon: 'Gem',
      features: ['Удаление дефектов', 'Многоэтапная полировка', 'Защитный воск', 'Восстановление блеска']
    },
    {
      title: 'Химчистка салона',
      description: 'Профессиональная очистка всех поверхностей интерьера автомобиля',
      price: 'от 4 000 ₽',
      icon: 'Sparkles',
      features: ['Очистка сидений', 'Потолок и пластик', 'Антибактериальная обработка', 'Устранение запахов']
    },
    {
      title: 'Предпродажная подготовка',
      description: 'Комплексная подготовка автомобиля для максимальной стоимости при продаже',
      price: 'от 12 000 ₽',
      icon: 'TrendingUp',
      features: ['Полная мойка', 'Устранение дефектов', 'Детейлинг салона', 'Консультация по продаже']
    },
    {
      title: 'Защита от угона',
      description: 'Установка сигнализаций, иммобилайзеров и GPS-трекеров',
      price: 'от 20 000 ₽',
      icon: 'Lock',
      features: ['Современные системы', 'Скрытая установка', 'Мобильное приложение', 'Гарантия 3 года']
    }
  ];

  const galleryImages = [
    { src: '/img/4d9edc02-5d8f-4342-bc7c-8c4a71b659eb.jpg', alt: 'Детейлинг премиум автомобиля' },
    { src: '/img/286e705a-6478-4bc2-80e5-17c861092e79.jpg', alt: 'Химчистка салона' },
    { src: '/img/68afabef-8e37-42db-af85-461b486351d3.jpg', alt: 'Полировка и защитные покрытия' }
  ];

  const advantages = [
    { icon: 'Star', title: 'Премиум качество', desc: '15+ лет опыта работы с люксовыми автомобилями' },
    { icon: 'Clock', title: 'Точно в срок', desc: 'Соблюдение всех временных договоренностей' },
    { icon: 'Award', title: 'Сертификаты', desc: 'Официальные сертификаты качества и гарантии' },
    { icon: 'Users', title: 'Команда экспертов', desc: 'Профессиональные мастера высшей квалификации' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full bg-white p-2 shadow-lg">
                <img 
                  src="https://cdn.poehali.dev/files/39d55219-fa21-47d8-ba11-45e1d4830dc2.jpeg" 
                  alt="EX Excellence Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat font-bold text-xl leading-none">EX</span>
                <span className="font-montserrat font-medium text-sm text-primary leading-none">EXCELLENCE</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="font-open-sans hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="font-open-sans hover:text-primary transition-colors">О нас</a>
              <a href="#gallery" className="font-open-sans hover:text-primary transition-colors">Галерея</a>
              <a href="#contact" className="font-open-sans hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat font-semibold">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              Записаться
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge variant="outline" className="mb-6 text-primary border-primary/50">
            <Icon name="Crown" className="h-4 w-4 mr-2" />
            Премиум детейлинг-центр
          </Badge>
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Ваш автомобиль<br />
            <span className="text-primary">достоин большего</span>
          </h1>
          <p className="font-open-sans text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональный детейлинг и защита автомобилей премиум-класса. 
            Сохраним красоту и ценность вашего автомобиля на долгие годы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat font-semibold">
              <Icon name="Calendar" className="h-5 w-5 mr-2" />
              Записаться на услугу
            </Button>
            <Button variant="outline" size="lg" className="font-montserrat font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Icon name="Play" className="h-5 w-5 mr-2" />
              Смотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Наши услуги</h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг для ухода за вашим автомобилем от профессиональных мастеров
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Icon name={service.icon} className="h-8 w-8 text-primary" />
                    <Badge variant="secondary" className="font-montserrat font-semibold">
                      {service.price}
                    </Badge>
                  </div>
                  <CardTitle className="font-montserrat text-xl">{service.title}</CardTitle>
                  <CardDescription className="font-open-sans">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-4" />
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center font-open-sans text-sm">
                        <Icon name="Check" className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 text-primary border-primary/50">
                <Icon name="Info" className="h-4 w-4 mr-2" />
                О компании
              </Badge>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
                Профессиональный уход за автомобилями с 2008 года
              </h2>
              <p className="font-open-sans text-lg text-muted-foreground mb-6">
                Мы специализируемся на высококачественном детейлинге автомобилей премиум-сегмента. 
                Наша команда использует только проверенные материалы и современные технологии для достижения 
                идеального результата.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name={advantage.icon} className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-montserrat font-semibold mb-1">{advantage.title}</h3>
                      <p className="font-open-sans text-sm text-muted-foreground">{advantage.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="Users" className="h-5 w-5 mr-2" />
                Узнать больше о команде
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>
              <img 
                src="/img/4d9edc02-5d8f-4342-bc7c-8c4a71b659eb.jpg" 
                alt="Наша команда в работе" 
                className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Галерея работ</h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Результаты нашей работы говорят сами за себя
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-open-sans text-sm text-foreground">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Icon name="Images" className="h-5 w-5 mr-2" />
              Посмотреть все работы
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Как нас найти</h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Удобное расположение в центре Москвы с собственной парковкой
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">Адрес</h3>
                <p className="font-open-sans text-muted-foreground">
                  Москва, ул. Автомобильная, 15<br />
                  стр. 1, этаж 1
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">Режим работы</h3>
                <p className="font-open-sans text-muted-foreground">
                  Пн-Вс: 09:00 - 21:00<br />
                  Без выходных
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Car" className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">Парковка</h3>
                <p className="font-open-sans text-muted-foreground">
                  Бесплатная парковка<br />
                  для клиентов на 50 мест
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <div className="bg-card border border-border/50 p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-montserrat font-semibold text-lg">Premium Auto на карте</h3>
                <Badge variant="outline" className="text-primary border-primary/50">
                  <Icon name="Navigation" className="h-4 w-4 mr-2" />
                  Построить маршрут
                </Badge>
              </div>
              
              {/* Interactive Map Container */}
              <div className="relative h-96 bg-muted rounded-lg overflow-hidden">
                {/* Map placeholder with Yandex Maps embed */}
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A7b79ad4c7b3b18b7e2bca6b72a3c07a8a6a0f5a4b7b9c6b9b4b9b5b9b9b9b9b&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="border-0"
                  title="Карта местоположения Premium Auto"
                ></iframe>
                
                {/* Map overlay with custom styling */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none">
                  <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                      <div>
                        <p className="font-montserrat font-semibold text-sm">Premium Auto</p>
                        <p className="font-open-sans text-xs text-muted-foreground">Детейлинг-центр</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-4">
                <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                  <Icon name="Navigation" className="h-4 w-4 mr-2" />
                  Яндекс.Карты
                </Button>
                <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                  <Icon name="Map" className="h-4 w-4 mr-2" />
                  Google Maps
                </Button>
                <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                  <Icon name="Smartphone" className="h-4 w-4 mr-2" />
                  2ГИС
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">Свяжитесь с нами</h2>
              <p className="font-open-sans text-lg text-muted-foreground mb-8">
                Готовы доверить свой автомобиль профессионалам? Свяжитесь с нами для консультации и записи на услугу.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-montserrat font-semibold">+7 (495) 123-45-67</p>
                    <p className="font-open-sans text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-montserrat font-semibold">info@premiumauto.ru</p>
                    <p className="font-open-sans text-sm text-muted-foreground">Ответим в течение часа</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-montserrat font-semibold">Москва, ул. Автомобильная, 15</p>
                    <p className="font-open-sans text-sm text-muted-foreground">Удобная парковка, центр города</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Icon name="Calendar" className="h-5 w-5 mr-2" />
                  Записаться онлайн
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>

            <Card className="bg-card border-border/50">
              <CardHeader>
                <CardTitle className="font-montserrat">Быстрая запись</CardTitle>
                <CardDescription className="font-open-sans">
                  Оставьте заявку и мы свяжемся с вами в течение 15 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-open-sans text-sm font-medium mb-2 block">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" 
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="font-open-sans text-sm font-medium mb-2 block">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" 
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="font-open-sans text-sm font-medium mb-2 block">Услуга</label>
                  <select className="w-full px-3 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Выберите услугу</option>
                    <option>Полная мойка и детейлинг</option>
                    <option>Керамическое покрытие</option>
                    <option>Полировка и реставрация</option>
                    <option>Химчистка салона</option>
                  </select>
                </div>
                
                <div>
                  <label className="font-open-sans text-sm font-medium mb-2 block">Комментарий</label>
                  <textarea 
                    rows={3}
                    className="w-full px-3 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent resize-none" 
                    placeholder="Дополнительная информация..."
                  ></textarea>
                </div>
                
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Icon name="Send" className="h-5 w-5 mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="relative w-8 h-8 rounded-full bg-white p-1 shadow-md">
                <img 
                  src="https://cdn.poehali.dev/files/39d55219-fa21-47d8-ba11-45e1d4830dc2.jpeg" 
                  alt="EX Excellence Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat font-bold text-lg leading-none">EX</span>
                <span className="font-montserrat font-medium text-xs text-primary leading-none">EXCELLENCE</span>
              </div>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="text-center text-muted-foreground font-open-sans text-sm">
            <p>&copy; 2024 Premium Auto. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;