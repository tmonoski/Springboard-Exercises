"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self, start=0):
      self.num = start 
      self.next = start

    def __repr__(self):
        """Show representation."""

        return f"<SerialGenerator start={self.num} next={self.next}>" 

    def generate(self):
       """Generates the next sequential number starting with the number used to initialize the SerialGenerator"""
       self.next += 1
       return self.next - 1
       
    def reset(self):
       """Resets the number back to the number used to initialize the SerialGenerator"""
       self.next = self.num