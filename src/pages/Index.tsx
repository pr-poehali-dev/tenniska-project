import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('official');

  const tournaments = {
    official: [
      { id: 1, title: 'Открытый чемпионат Москвы', date: '15-20 декабря', category: 'Официальный', level: 'Профессионал', participants: 64, status: 'Регистрация открыта' },
      { id: 2, title: 'Кубок столицы 2025', date: '10-12 января', category: 'Официальный', level: 'Любитель', participants: 32, status: 'Регистрация открыта' },
      { id: 3, title: 'Зимний турнир РТТ', date: '25-28 января', category: 'Официальный', level: 'Профессионал', participants: 48, status: 'Скоро' },
    ],
    youth: [
      { id: 4, title: 'Молодёжка Центрального района', date: '18 декабря', category: 'Молодёжка', disciplines: ['Одиночный разряд', 'Парный разряд', 'Смешанный парный'], district: 'Центральный' },
      { id: 5, title: 'Молодёжка Северного района', date: '20 декабря', category: 'Молодёжка', disciplines: ['Одиночный разряд', 'Парный разряд', 'Смешанный парный'], district: 'Северный' },
      { id: 6, title: 'Молодёжка Южного района', date: '22 декабря', category: 'Молодёжка', disciplines: ['Одиночный разряд', 'Парный разряд', 'Смешанный парный'], district: 'Южный' },
    ],
    street: [
      { id: 7, title: 'Дворовой турнир на Патриарших', date: 'Каждую субботу', location: 'Патриаршие пруды', access: 'Свободный вход', players: '12-16' },
      { id: 8, title: 'Площадка в парке Горького', date: 'Воскресенья', location: 'Парк Горького', access: 'Свободный вход', players: '8-12' },
      { id: 9, title: 'Кортик на ВДНХ', date: 'Понедельник-пятница', location: 'ВДНХ, площадка 3', access: 'Свободный вход', players: '10-14' },
    ]
  };

  const news = [
    { id: 1, title: 'Итоги осеннего чемпионата', date: '28 ноября', image: 'https://cdn.poehali.dev/projects/91037347-6ef5-43f2-9db7-b4888f58320b/files/d2f985ec-0243-419a-87a8-2f8a2684f1af.jpg', excerpt: 'Завершился яркий турнир с участием 120 игроков' },
    { id: 2, title: 'Новые правила регистрации', date: '25 ноября', image: 'https://cdn.poehali.dev/projects/91037347-6ef5-43f2-9db7-b4888f58320b/files/cfa1ed63-5f3c-451e-b832-05ff9adb8fc6.jpg', excerpt: 'Упрощённая система подачи заявок для всех участников' },
    { id: 3, title: 'Открытие молодёжной секции', date: '20 ноября', image: 'https://cdn.poehali.dev/projects/91037347-6ef5-43f2-9db7-b4888f58320b/files/4a1000b4-1ba4-43ac-86df-26d2ed18e951.jpg', excerpt: 'Запуск программы развития теннисистов 12-18 лет' },
  ];

  const userProfile = {
    name: 'Алексей Петров',
    rating: 1450,
    tournaments: 12,
    wins: 8,
    achievements: ['🏆 Победитель Кубка столицы', '🥈 Серебро открытого чемпионата', '🎾 10+ турниров']
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 glass-effect border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-green flex items-center justify-center">
                <Icon name="Trophy" size={24} className="text-black" />
              </div>
              <h1 className="text-2xl font-bold">ТЕННISKA</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#tournaments" className="hover:text-primary transition-colors">Турниры</a>
              <a href="#profile" className="hover:text-primary transition-colors">Профиль</a>
              <a href="#news" className="hover:text-primary transition-colors">Новости</a>
              <Button className="gradient-green text-black font-semibold hover:opacity-90">
                Войти
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/projects/91037347-6ef5-43f2-9db7-b4888f58320b/files/d2f985ec-0243-419a-87a8-2f8a2684f1af.jpg" 
            alt="Tennis court" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 gradient-orange text-white border-0 text-sm px-4 py-1">
              🔥 Ближайший турнир: 15 декабря
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Портал<br />
              <span className="text-gradient">Теннисных турниров</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Официальные соревнования, молодёжные лиги и дворовые турниры. Всё о теннисе в Москве в одном месте.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gradient-green text-black font-semibold text-lg px-8 hover:opacity-90 transition-all hover:scale-105">
                <Icon name="Calendar" size={20} className="mr-2" />
                Посмотреть турниры
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 hover:bg-primary/10 transition-all hover:scale-105">
                <Icon name="User" size={20} className="mr-2" />
                Создать профиль
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: 'Trophy', title: 'Официальные турниры', desc: 'Профессиональные соревнования с рейтингом', color: 'gradient-green' },
              { icon: 'Users', title: 'Молодёжка', desc: '7 районов, 3 дисциплины в каждом', color: 'gradient-orange' },
              { icon: 'MapPin', title: 'Дворовые площадки', desc: '12 локаций со свободным входом', color: 'gradient-green' },
            ].map((item, idx) => (
              <Card 
                key={idx} 
                className="glass-effect hover:scale-105 transition-all duration-300 cursor-pointer border-border/50 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-4`}>
                    <Icon name={item.icon as any} size={28} className="text-black" />
                  </div>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tournaments" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Турниры</h2>
            <p className="text-muted-foreground text-lg">Выбирайте категорию и регистрируйтесь на турнир</p>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 glass-effect h-14">
              <TabsTrigger value="official" className="data-[state=active]:gradient-green data-[state=active]:text-black text-base">
                <Icon name="Award" size={18} className="mr-2" />
                Официальные
              </TabsTrigger>
              <TabsTrigger value="youth" className="data-[state=active]:gradient-green data-[state=active]:text-black text-base">
                <Icon name="Users" size={18} className="mr-2" />
                Молодёжка
              </TabsTrigger>
              <TabsTrigger value="street" className="data-[state=active]:gradient-green data-[state=active]:text-black text-base">
                <Icon name="MapPin" size={18} className="mr-2" />
                Дворовые
              </TabsTrigger>
            </TabsList>

            <TabsContent value="official" className="space-y-4 animate-scale-in">
              {tournaments.official.map((tournament) => (
                <Card key={tournament.id} className="glass-effect border-border/50 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-2xl">{tournament.title}</CardTitle>
                          <Badge className="gradient-green text-black border-0">{tournament.status}</Badge>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Calendar" size={16} />
                            {tournament.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Users" size={16} />
                            {tournament.participants} участников
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Target" size={16} />
                            {tournament.level}
                          </span>
                        </div>
                      </div>
                      <Button className="gradient-orange text-white border-0 hover:opacity-90">
                        Зарегистрироваться
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="youth" className="space-y-4 animate-scale-in">
              {tournaments.youth.map((tournament) => (
                <Card key={tournament.id} className="glass-effect border-border/50 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-2xl">{tournament.title}</CardTitle>
                          <Badge variant="outline" className="border-primary text-primary">{tournament.district}</Badge>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Icon name="Calendar" size={16} />
                            {tournament.date}
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {tournament.disciplines.map((disc, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">{disc}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <Button className="gradient-orange text-white border-0 hover:opacity-90">
                        Подать заявку
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="street" className="space-y-4 animate-scale-in">
              {tournaments.street.map((tournament) => (
                <Card key={tournament.id} className="glass-effect border-border/50 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-2xl">{tournament.title}</CardTitle>
                          <Badge className="gradient-green text-black border-0">{tournament.access}</Badge>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="MapPin" size={16} />
                            {tournament.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={16} />
                            {tournament.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Users" size={16} />
                            {tournament.players} игроков
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" className="hover:bg-primary/10">
                        Подробнее
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="profile" className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect border-border/50 overflow-hidden">
              <div className="h-32 gradient-green"></div>
              <CardHeader className="-mt-16 relative">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-end">
                  <div className="w-32 h-32 rounded-2xl bg-card border-4 border-background flex items-center justify-center text-4xl">
                    👤
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-3xl mb-2">{userProfile.name}</CardTitle>
                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="TrendingUp" size={18} />
                        Рейтинг: {userProfile.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Trophy" size={18} />
                        Турниров: {userProfile.tournaments}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Target" size={18} />
                        Побед: {userProfile.wins}
                      </span>
                    </div>
                  </div>
                  <Button className="gradient-orange text-white border-0">
                    Редактировать профиль
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Достижения</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {userProfile.achievements.map((achievement, idx) => (
                    <Card key={idx} className="bg-muted/50 border-border/30">
                      <CardHeader className="text-center">
                        <CardTitle className="text-lg">{achievement}</CardTitle>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="news" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Последние новости</h2>
            <p className="text-muted-foreground text-lg">Следите за событиями теннисного мира</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {news.map((item, idx) => (
              <Card 
                key={item.id} 
                className="glass-effect border-border/50 overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2" variant="outline">{item.date}</Badge>
                  <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  <CardDescription>{item.excerpt}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-16 border-t border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-green flex items-center justify-center">
                  <Icon name="Trophy" size={24} className="text-black" />
                </div>
                <h3 className="text-xl font-bold">ТЕННISKA</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Портал теннисных турниров для всех уровней
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Турниры</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Официальные</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Молодёжка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Дворовые</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О проекте</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Форум</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Галерея</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Партнёры</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 ТЕННISKA. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
