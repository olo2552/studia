class PcbBom {
    IPrintable printer;

    public PcbBom(IPrintable somethingThatPrints) {
        this.printer = somethingThatPrints;
    }

    public void Print() {
        this.printer.print();
    }
}