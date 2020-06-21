public abstract class Animal {
    public String Name {get; private set;}
    public double Height {get; set;}
    public double Weight {get; set}

    public void ShowInfo() {
        Console.WriteLine($"Name: ${this.Name}, Height: ${this.Height}, Weight: ${this.Weight}");
    }

    public int Age { get ; set ; }
    public void SetItsAge(int age) {
        Age = age ;
    }
    public void SetItsAge (DateTime birthDate) {
        DateTime currentDate = DateTime.Now();
        return currentDate.Year - birthDate.Year - 1;
    }

    protected string Order { get ; set ; }
    public string Family { get ; protected set ; }

    constructor(Name name) {
        // Intellisense nie podpowiada this.Order i nie można przypisać this.Family


        // Kolejność wywoływania konstruktorów:
        // - konstruktory klas bazowych w kolejności w jakiej są dziedziczone (na początku konstruktor klasy bazowej dla wszystkich pozostałych dziedziczących klas, na końcu konstruktor naszej aktualnej klasy),
        // - konstruktory dla obiektów zadeklarowanych w ciele klasy,
        // - konstruktor klasy.
        this.Name = name;
    }


    public virtual void SayHello() {
        Console.WriteLine($"I'm an animal and my name is { Name }") ;
    }
}