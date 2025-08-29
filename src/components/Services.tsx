import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Services = () => {
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

  return (
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
  );
};

export default Services;