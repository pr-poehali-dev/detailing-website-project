import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const About = () => {
  const advantages = [
    { icon: 'Star', title: 'Премиум качество', desc: '15+ лет опыта работы с люксовыми автомобилями' },
    { icon: 'Clock', title: 'Точно в срок', desc: 'Соблюдение всех временных договоренностей' },
    { icon: 'Award', title: 'Сертификаты', desc: 'Официальные сертификаты качества и гарантии' },
    { icon: 'Users', title: 'Команда экспертов', desc: 'Профессиональные мастера высшей квалификации' }
  ];

  return (
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
  );
};

export default About;