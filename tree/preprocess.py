import csv, pprint
pp = pprint.PrettyPrinter(indent=4)

class pointer:
    def __init__(self, obj): self.obj = obj
    def get(self):    return self.obj
    def set(self, obj):      self.obj = obj

a = pointer(6)
b = a

a.set(5)
print(b.get())
