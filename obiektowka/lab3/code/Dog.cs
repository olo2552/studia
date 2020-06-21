public class Dog : Animal {
    public void WagItsTail() {
        Console.WriteLine("I'm wagging my tail ...");
    }

    public string Breed {get; private set;}

    public Dog(string name, string breed): base(name) {
        this.Breed = breed;
    }


    public override void SayHello() {
        Console.WriteLine($"I'm a DOG and my name is { Name } - Woof ! Woof !") ;
    }

    public override void Cry() {
        Console.WriteLine(" Woof ! Woof ! Woof !") ;
    }
}