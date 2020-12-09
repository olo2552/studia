class Program
{
    static void Main(string[] args)
    {
        Dog dog1 = new Dog();
        // TODO: Przypisz dowolne warto±ci tym skªadowym i wypisz je na ekranie konsoli za pomoc¡ metody WriteLine
                 typu Console.

        dog.WagItsTail();

        // Animal myAnimal = new Dog();
        // Dog myDog = new Animal();


        Dog myDog = new Dog () ;
        // Animal a = myDog; // rzutowanie w gore
        Console.WriteLine(a.Name);
        // a.WagItsTail(); // blad kompilacji
        Dog d = (Dog) a ;
        // a.WagItsTail(); // wywolanie metody sie uda


        Dog dog2 = new Dog("dog2");
        Snake snake2 = new Snake("snake2");
        // Animal animal2 = new Animal("animal2");

        dog2.SayHello();
        snake2.SayHello();
        // animal2.SayHello();

        IPrintable photocopier = new Photocopier();
        IPrintable printer = new Printer();
        // Print()
        ICopiable copier = new Photocopier();
        // Copy() i Print()

        var pcbBom1 = new PCBBom(printer);
        var pcbBom2 = new PCBBom(photocopier);
        pcbBomA.Print();
        pcbBomB.Print();
    }
}