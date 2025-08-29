import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Contact = () => {
  return (
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
  );
};

export default Contact;