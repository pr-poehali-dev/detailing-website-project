import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Map = () => {
  return (
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
            
            <div className="relative h-96 bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A7b79ad4c7b3b18b7e2bca6b72a3c07a8a6a0f5a4b7b9c6b9b4b9b5b9b9b9b9b&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
                className="border-0"
                title="Карта местоположения Premium Auto"
              ></iframe>
              
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
  );
};

export default Map;