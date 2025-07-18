import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Индивидуальная терапия для взрослых",
      description: "Работа с тревожностью, депрессией, стрессом, отношениями и личностными проблемами",
      icon: "User",
      price: "от 3500 руб"
    },
    {
      title: "Детская и подростковая психология",
      description: "Помощь детям и подросткам в адаптации, эмоциональном развитии и решении поведенческих проблем",
      icon: "Heart",
      price: "от 3000 руб"
    },
    {
      title: "Семейная терапия",
      description: "Работа с семейными конфликтами, улучшение коммуникации и укрепление отношений",
      icon: "Users",
      price: "от 4500 руб"
    },
    {
      title: "Групповая терапия",
      description: "Занятия в группах для проработки социальных навыков и взаимной поддержки",
      icon: "UserCheck",
      price: "от 2000 руб"
    }
  ];

  const methods = [
    {
      title: "Когнитивно-поведенческая терапия (КПТ)",
      description: "Эффективный подход для работы с тревогой, депрессией и негативными мыслительными паттернами"
    },
    {
      title: "Гештальт-терапия",
      description: "Работа с эмоциями в настоящем моменте, развитие осознанности и контакта с собой"
    },
    {
      title: "Арт-терапия",
      description: "Использование творческих методов для выражения чувств и проработки травм"
    },
    {
      title: "Игровая терапия",
      description: "Специальный подход для работы с детьми через игру и творческие активности"
    }
  ];

  const exercises = [
    {
      title: "Дыхательные упражнения",
      description: "Простые техники для снятия стресса и тревоги",
      icon: "Waves"
    },
    {
      title: "Упражнения на осознанность",
      description: "Медитативные практики для развития внимания к настоящему моменту",
      icon: "Brain"
    },
    {
      title: "Работа с эмоциями",
      description: "Техники для распознавания и регуляции эмоциональных состояний",
      icon: "Smile"
    },
    {
      title: "Упражнения для сна",
      description: "Методики для улучшения качества сна и релаксации",
      icon: "Moon"
    }
  ];

  const blogPosts = [
    {
      title: "Как справиться с тревогой: практические советы",
      excerpt: "Разбираем основные причины тревожности и эффективные способы её снижения",
      date: "15 июля 2024",
      readTime: "7 мин"
    },
    {
      title: "Детские кризисы: что нужно знать родителям",
      excerpt: "Понимание возрастных кризисов поможет лучше поддержать ребёнка",
      date: "10 июля 2024",
      readTime: "5 мин"
    },
    {
      title: "Границы в отношениях: зачем они нужны",
      excerpt: "Учимся выстраивать здоровые границы с близкими людьми",
      date: "5 июля 2024",
      readTime: "6 мин"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-cream to-warm-peach/20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-warm-peach/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Heart" className="h-8 w-8 text-warm-brown" />
            <span className="text-2xl font-display font-bold text-warm-brown">Анна Смирнова</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-warm-brown hover:text-warm-sage transition-colors">Обо мне</a>
            <a href="#services" className="text-warm-brown hover:text-warm-sage transition-colors">Услуги</a>
            <a href="#methods" className="text-warm-brown hover:text-warm-sage transition-colors">Методы</a>
            <a href="#materials" className="text-warm-brown hover:text-warm-sage transition-colors">Материалы</a>
            <a href="#contact" className="text-warm-brown hover:text-warm-sage transition-colors">Контакты</a>
          </nav>
          <Button className="bg-warm-sage hover:bg-warm-brown text-white">
            Записаться на консультацию
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-display font-bold text-warm-brown mb-6 leading-tight">
                Верните радость жизни — начните с первого шага
              </h1>
              <p className="text-xl text-warm-brown/80 mb-8 leading-relaxed">
                Тревога, стресс, семейные конфликты — всё это можно преодолеть. 
                Я помогу вам и вашим близким найти внутреннюю силу и гармонию. 
                Индивидуальный подход к каждому — детям и взрослым.
              </p>
              <div className="flex justify-center sm:justify-start">
                <a 
                  href="https://wa.me/79991234567?text=Здравствуйте! Хочу записаться на консультацию к психологу"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-warm-sage hover:bg-warm-brown text-white text-lg px-8 py-3">
                    <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                    Записаться на приём
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex-1 animate-scale-in">
              <img 
                src="/img/0e294510-d260-4b83-b67c-0afe58d366f0.jpg" 
                alt="Клинический психолог Анна Смирнова"
                className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold text-warm-brown mb-8">Обо мне</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <p className="text-lg text-warm-brown/80 mb-6 leading-relaxed">
                  Я — клинический психолог с 8-летним опытом работы. Специализируюсь на помощи детям, подросткам и взрослым в решении эмоциональных и поведенческих проблем.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="GraduationCap" className="h-6 w-6 text-warm-sage mt-1" />
                    <div>
                      <h4 className="font-semibold text-warm-brown">Образование</h4>
                      <p className="text-warm-brown/70">МГУ, факультет психологии, клинический психолог</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Award" className="h-6 w-6 text-warm-sage mt-1" />
                    <div>
                      <h4 className="font-semibold text-warm-brown">Сертификаты</h4>
                      <p className="text-warm-brown/70">КПТ, Гештальт-терапия, Арт-терапия</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Users" className="h-6 w-6 text-warm-sage mt-1" />
                    <div>
                      <h4 className="font-semibold text-warm-brown">Опыт</h4>
                      <p className="text-warm-brown/70">Более 500 успешных случаев</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/img/0d02edb4-571a-4ec6-9e49-6b1049a0af84.jpg" 
                  alt="Терапевтическая сессия"
                  className="rounded-2xl shadow-xl max-w-sm w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-warm-peach/10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-display font-bold text-warm-brown text-center mb-12">Услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-warm-peach/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-warm-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} className="h-8 w-8 text-warm-sage" />
                  </div>
                  <CardTitle className="text-warm-brown font-display text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-warm-brown/70 mb-4">{service.description}</CardDescription>
                  <Badge variant="secondary" className="bg-warm-sage text-white">{service.price}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section id="specialization" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-display font-bold text-warm-brown text-center mb-12">Специализация</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-warm-peach/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Zap" className="h-10 w-10 text-warm-peach" />
              </div>
              <h3 className="text-xl font-display font-semibold text-warm-brown mb-4">Тревожные расстройства</h3>
              <p className="text-warm-brown/70">Панические атаки, фобии, генерализованное тревожное расстройство</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-warm-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="CloudRain" className="h-10 w-10 text-warm-sage" />
              </div>
              <h3 className="text-xl font-display font-semibold text-warm-brown mb-4">Депрессивные состояния</h3>
              <p className="text-warm-brown/70">Депрессия, апатия, эмоциональное выгорание</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-warm-brown/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Baby" className="h-10 w-10 text-warm-brown" />
              </div>
              <h3 className="text-xl font-display font-semibold text-warm-brown mb-4">Детская психология</h3>
              <p className="text-warm-brown/70">Поведенческие проблемы, адаптация, развитие эмоционального интеллекта</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section id="methods" className="py-16 px-4 bg-warm-sage/10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-display font-bold text-warm-brown text-center mb-12">Методы работы</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {methods.map((method, index) => (
              <Card key={index} className="border-warm-sage/20 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-warm-brown font-display">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-warm-brown/70">{method.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-display font-bold text-warm-brown text-center mb-12">Стоимость</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-warm-peach/20 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-warm-brown font-display">Первичная консультация</CardTitle>
                <div className="text-3xl font-bold text-warm-sage">3000₽</div>
                <CardDescription>90 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-warm-brown/70">
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-warm-sage mr-2" />Диагностика</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-warm-sage mr-2" />План терапии</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-warm-sage mr-2" />Рекомендации</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-warm-sage/20 hover:shadow-lg transition-shadow border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-warm-brown font-display">Индивидуальная сессия</CardTitle>
                <div className="text-3xl font-bold text-warm-sage">3500₽</div>
                <CardDescription>60 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-warm-brown/70">
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-warm-sage mr-2" />Терапевтическая работа</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-warm-sage mr-2" />Домашние задания</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-warm-sage mr-2" />Поддержка между сессиями</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-warm-brown/20 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-warm-brown font-display">Семейная терапия</CardTitle>
                <div className="text-3xl font-bold text-warm-sage">4500₽</div>
                <CardDescription>75 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-warm-brown/70">
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-warm-sage mr-2" />Работа с парой/семьёй</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-warm-sage mr-2" />Улучшение коммуникации</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-warm-sage mr-2" />Семейные задания</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="py-16 px-4 bg-warm-peach/10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-display font-bold text-warm-brown text-center mb-12">Материалы для клиентов</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-display font-semibold text-warm-brown mb-6">Упражнения для самопомощи</h3>
              <div className="space-y-4">
                {exercises.map((exercise, index) => (
                  <Card key={index} className="border-warm-peach/20 hover:shadow-md transition-shadow">
                    <CardContent className="flex items-center space-x-4 p-4">
                      <div className="w-12 h-12 bg-warm-sage/20 rounded-full flex items-center justify-center">
                        <Icon name={exercise.icon} className="h-6 w-6 text-warm-sage" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-warm-brown">{exercise.title}</h4>
                        <p className="text-warm-brown/70 text-sm">{exercise.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="/img/9ba7fbcd-c88b-49ac-a415-e323c6e63156.jpg" 
                alt="Упражнения для релаксации"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-display font-bold text-warm-brown text-center mb-12">Статьи и блог</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-warm-peach/20 hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-warm-brown font-display text-lg leading-tight">{post.title}</CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-warm-brown/60">
                    <Icon name="Calendar" className="h-4 w-4" />
                    <span>{post.date}</span>
                    <Icon name="Clock" className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-warm-brown/70">{post.excerpt}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-warm-sage text-warm-sage hover:bg-warm-sage hover:text-white">
              Все статьи
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-warm-sage/10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-display font-bold text-warm-brown text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-warm-peach/20 rounded-lg px-6">
                <AccordionTrigger className="text-warm-brown font-display hover:text-warm-sage">
                  Как проходит первая консультация?
                </AccordionTrigger>
                <AccordionContent className="text-warm-brown/70">
                  Первая встреча длится 90 минут. Мы обсуждаем вашу ситуацию, определяем цели терапии и составляем план работы. Это безопасное пространство для знакомства и понимания, подходит ли вам мой подход.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-warm-peach/20 rounded-lg px-6">
                <AccordionTrigger className="text-warm-brown font-display hover:text-warm-sage">
                  Как часто нужно посещать сессии?
                </AccordionTrigger>
                <AccordionContent className="text-warm-brown/70">
                  Обычно рекомендуется встречаться раз в неделю. Периодичность может варьироваться в зависимости от вашего состояния и целей терапии. Некоторым клиентам подходят встречи раз в две недели.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-warm-peach/20 rounded-lg px-6">
                <AccordionTrigger className="text-warm-brown font-display hover:text-warm-sage">
                  Работаете ли вы с детьми?
                </AccordionTrigger>
                <AccordionContent className="text-warm-brown/70">
                  Да, я работаю с детьми от 5 лет и подростками. Использую игровую терапию, арт-терапию и другие методы, подходящие для детского возраста. Обязательно привлекаю родителей к процессу.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border border-warm-peach/20 rounded-lg px-6">
                <AccordionTrigger className="text-warm-brown font-display hover:text-warm-sage">
                  Конфиденциальность данных?
                </AccordionTrigger>
                <AccordionContent className="text-warm-brown/70">
                  Вся информация, которую вы предоставляете, строго конфиденциальна. Я соблюдаю этический кодекс психолога и не разглашаю детали наших встреч третьим лицам без вашего письменного согласия.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-display font-bold text-warm-brown text-center mb-12">Контакты</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-display font-semibold text-warm-brown mb-6">Свяжитесь со мной</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="h-6 w-6 text-warm-sage" />
                    <div>
                      <p className="font-semibold text-warm-brown">Телефон</p>
                      <p className="text-warm-brown/70">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="h-6 w-6 text-warm-sage" />
                    <div>
                      <p className="font-semibold text-warm-brown">Email</p>
                      <p className="text-warm-brown/70">anna.smirnova@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" className="h-6 w-6 text-warm-sage" />
                    <div>
                      <p className="font-semibold text-warm-brown">Адрес</p>
                      <p className="text-warm-brown/70">г. Москва, ул. Примерная, д. 10</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" className="h-6 w-6 text-warm-sage" />
                    <div>
                      <p className="font-semibold text-warm-brown">Время работы</p>
                      <p className="text-warm-brown/70">Пн-Пт: 9:00-20:00<br />Сб: 10:00-16:00</p>
                    </div>
                  </div>
                </div>
                <Separator className="my-6" />
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="border-warm-sage text-warm-sage hover:bg-warm-sage hover:text-white">
                    <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                    Telegram
                  </Button>
                  <Button variant="outline" size="sm" className="border-warm-sage text-warm-sage hover:bg-warm-sage hover:text-white">
                    <Icon name="MessageSquare" className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
              <div>
                <Card className="border-warm-peach/20">
                  <CardHeader>
                    <CardTitle className="text-warm-brown font-display">Записаться на консультацию</CardTitle>
                    <CardDescription>Свяжитесь со мной напрямую через WhatsApp</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <Icon name="MessageCircle" className="h-8 w-8 text-green-600" />
                      </div>
                      <p className="text-warm-brown/70">
                        Напишите мне в WhatsApp, и я отвечу в течение часа в рабочее время
                      </p>
                      <a 
                        href="https://wa.me/79991234567?text=Здравствуйте! Хочу записаться на консультацию к психологу"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                          Написать в WhatsApp
                        </Button>
                      </a>
                      <p className="text-sm text-warm-brown/60">
                        +7 (999) 123-45-67
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-brown text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Heart" className="h-6 w-6" />
            <span className="text-xl font-display font-semibold">Анна Смирнова</span>
          </div>
          <p className="text-white/80 mb-4">Клинический психолог • Помощь детям и взрослым</p>
          <div className="flex justify-center space-x-6 text-sm text-white/60">
            <span>© 2024 Все права защищены</span>
            <span>•</span>
            <span>Политика конфиденциальности</span>
            <span>•</span>
            <span>Условия использования</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;