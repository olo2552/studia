public class ExampleTransformer {
    public delegate int Transformer(int x);

    public void Transform (Transformer t, int value) {
        try {
            int ret = t(value);
            Console.WriteLine($" Output value is: {ret}");
        }
        catch (DivideByZeroException ex) {
            Console.WriteLine(ex.Message); // log exception
            // do something extra ...
        }
        catch (Exepation ex) {
            Console.WriteLine(ex.Message);
            throw;
        }
        finally { // usually used for clean up
            Console.WriteLine("Always called !");
        }
    }

    public void Transform(Func <int, int, int> t, int value1, int value2) {
        int ret = t(value1, value2);
        Console.WriteLine($" Output value is: {ret}");
    }


    public event Action TransformationCompleted;
    public void Transform(Transformer t, int value) {
        this.Transform(t, value);
        TransformationCompleted?.Invoke(); // delegate invocation
    }
}