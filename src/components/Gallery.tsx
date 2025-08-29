import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Gallery = () => {
  const galleryImages = [
    { src: '/img/4d9edc02-5d8f-4342-bc7c-8c4a71b659eb.jpg', alt: 'Детейлинг премиум автомобиля' },
    { src: '/img/286e705a-6478-4bc2-80e5-17c861092e79.jpg', alt: 'Химчистка салона' },
    { src: '/img/68afabef-8e37-42db-af85-461b486351d3.jpg', alt: 'Полировка и защитные покрытия' }
  ];

  return (
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
  );
};

export default Gallery;