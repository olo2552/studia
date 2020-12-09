class PhotoPrinter : IPrintable, ICopiable {
    public void Print() {
        Console.WriteLine("I'm a PhotoPrinter and I'm printin'... ");
    }

    public void Copy() {
        Console.WriteLine("I'm a PhotoPrinter and I'm copin'... ");
    }
}