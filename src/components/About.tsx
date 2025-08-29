import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const stats = [
    { number: '2500+', label: 'Довольных клиентов' },
    { number: '15', label: 'Лет опыта' },
    { number: '100%', label: 'Гарантия качества' },
    { number: '24/7', label: 'Поддержка клиентов' }
  ];

  const advantages = [
    { 
      icon: 'Award', 
      title: 'Сертифицированные мастера',
      desc: 'Команда профессионалов с международными сертификатами и многолетним опытом работы с премиальными автомобилями'
    },
    { 
      icon: 'Zap', 
      title: 'Современное оборудование',
      desc: 'Используем только передовые технологии и профессиональное оборудование от ведущих мировых производителей'
    },
    { 
      icon: 'Shield', 
      title: 'Премиальные материалы',
      desc: 'Работаем исключительно с проверенными брендами: Chemical Guys, Meguiars, Adams Polishes, Gyeon'
    },
    { 
      icon: 'Clock', 
      title: 'Гарантия результата',
      desc: 'Даем письменную гарантию на все виды работ. В случае недовольства - переделываем бесплатно'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            О нашей <span className="text-gold-500">студии</span>
          </h2>
          <p className="font-open-sans text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Мы — команда энтузиастов автомобильной индустрии, которая превращает уход за автомобилем в искусство. 
            Каждый проект для нас — это возможность создать что-то исключительное.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-gold-500/20 rounded-lg"></div>
            <img 
              src="/img/1eb5e57b-2551-4cf8-b294-b0444a1520a2.jpg" 
              alt="Команда профессионалов за работой" 
              className="relative w-full h-[500px] object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-montserrat font-bold text-white text-lg mb-1">Наша мастерская</h4>
              <p className="font-open-sans text-gray-300 text-sm">Москва, ул. Автомобильная, 15</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-montserrat font-bold text-3xl mb-6">Почему выбирают нас?</h3>
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={advantage.icon} className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-lg mb-2">{advantage.title}</h4>
                      <p className="font-open-sans text-muted-foreground">{advantage.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dark-900 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-dark-800 border-gold-500/20 text-center">
                <CardContent className="p-6">
                  <div className="font-montserrat font-bold text-3xl md:text-4xl text-gold-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="font-open-sans text-gray-300">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-white mb-4">
              Готовы доверить нам свой автомобиль?
            </h3>
            <p className="font-open-sans text-gray-300 mb-8 max-w-2xl mx-auto">
              Запишитесь на бесплатную консультацию, и мы подберем оптимальный пакет услуг для вашего автомобиля
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-black font-montserrat font-semibold">
                <Icon name="Calendar" className="h-5 w-5 mr-2" />
                Записаться на консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black">
                <Icon name="Phone" className="h-5 w-5 mr-2" />
                Позвонить сейчас
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;