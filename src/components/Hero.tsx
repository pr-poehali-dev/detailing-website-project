import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
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
  );
};

export default Hero;