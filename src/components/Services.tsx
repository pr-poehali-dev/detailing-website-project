import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      title: 'Комплексная мойка',
      description: 'Бережная двухфазная мойка с ручной сушкой и детейлингом',
      price: 'от 3 500 ₽',
      icon: 'Car',
      features: ['Предварительная мойка', 'Контактная мойка', 'Очистка дисков', 'Сушка без разводов'],
      popular: false
    },
    {
      title: 'Керамическое покрытие',
      description: 'Защитное керамическое покрытие кузова на 2-5 лет',
      price: 'от 25 000 ₽',
      icon: 'Shield',
      features: ['Полировка перед нанесением', 'Керамическое покрытие', 'Гарантия до 5 лет', 'Гидрофобный эффект'],
      popular: true
    },
    {
      title: 'Полировка кузова',
      description: 'Восстановительная и защитная полировка с устранением дефектов',
      price: 'от 12 000 ₽',
      icon: 'Gem',
      features: ['Устранение царапин', 'Многоступенчатая полировка', 'Защитное покрытие', 'Восстановление блеска'],
      popular: false
    },
    {
      title: 'Детейлинг салона',
      description: 'Глубокая чистка и восстановление всех поверхностей салона',
      price: 'от 6 000 ₽',
      icon: 'Sparkles',
      features: ['Химчистка сидений', 'Очистка потолка', 'Антибактериальная обработка', 'Кондиционирование кожи'],
      popular: false
    },
    {
      title: 'PPF защитная пленка',
      description: 'Полиуретановая пленка для защиты кузова от сколов и царапин',
      price: 'от 35 000 ₽',
      icon: 'ShieldCheck',
      features: ['Защита от сколов', 'Самовосстановление', 'Прозрачность', 'Гарантия 7 лет'],
      popular: true
    },
    {
      title: 'Подготовка к продаже',
      description: 'Комплексная подготовка автомобиля для продажи по максимальной цене',
      price: 'от 15 000 ₽',
      icon: 'TrendingUp',
      features: ['Косметический ремонт', 'Полная мойка и детейлинг', 'Устранение дефектов', 'Фотосессия авто'],
      popular: false
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
            <Card key={index} className={`relative bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] ${service.popular ? 'ring-2 ring-gold-500/50' : ''}`}>
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gold-500 text-black font-montserrat font-semibold px-3 py-1">
                    Популярная услуга
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Icon name={service.icon} className="h-8 w-8 text-primary" />
                  <Badge variant="secondary" className="font-montserrat font-semibold bg-gold-100 text-gold-800">
                    {service.price}
                  </Badge>
                </div>
                <CardTitle className="font-montserrat text-xl">{service.title}</CardTitle>
                <CardDescription className="font-open-sans">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Separator className="mb-4" />
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center font-open-sans text-sm">
                      <Icon name="Check" className="h-4 w-4 text-gold-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gold-500 hover:bg-gold-600 text-black font-montserrat font-semibold">
                  Записаться
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