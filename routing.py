class Point:
    def __init__(self, ID="NaN", obj=[], N=None, S=None, E=None, W=None):
       	self.ID = ID
       	self.N = N
       	self.S = S
        self.E = E
        self.W = W
        self.obj = obj

    def adjacent(self, point2, dir):
        if dir==0:
            if(self.N != None or point2.S != None):
                print("conflict map with " + self.ID + " and " + point2.ID)
                return
            self.N = point2
            point2.S = self
        elif dir==1:
            if(self.S != None or point2.N != None): 
                print("conflict map with " + self.ID + " and " + point2.ID)
                return
            self.S = point2
            point2.N = self
        elif dir==2:
            if(self.E != None or point2.W != None): 
                print("conflict map with " + self.ID + " and " + point2.ID)
                return                                        
            self.E = point2
            point2.W = self
        else:
            if(self.W != None or point2.E != None): 
                print("conflict map with " + self.ID + " and " + point2.ID)
                return
            self.W = point2
            point2.E = self
        
            
        
    def navigate(self, des, out=[]):
	for i in out:
	    if(i==self):
		return None
	out.append(self)
	if(des in self.obj):
	    return out
        if(self.N != None):
            n = self.N.navigate(des, out)
            if(n != None): return n
        if(self.E != None):
            e = self.E.navigate(des, out)
            if(e != None): return e
        if(self.S != None):
            s = self.S.navigate(des, out)
            if(s != None): return s
        if(self.W != None):
	    w = self.W.navigate(des, out)
            if(w != None): return w	
		

datadict = ["McDonald", "Stair", "WC", "KFC", "MK", "Ichiban", "Daiso", "Coco"]
x = Point("first", {0, 1})
y = Point("second", {2, 3})
z = Point("third", {4})
aa = Point("fourth", {5})
ab = Point("fifth", {6, 7})
pts = [x,y]
x.adjacent(y, 0)
y.adjacent(aa, 2)
z.adjacent(x, 2)
ab.adjacent(aa,3)
beg = ab
end = 4
ans = beg.navigate(end)
if(ans == None):
    print("Cannot find route to the " + datadict[end])
else:
    for i in ans:
        print(i.ID)
        for j in i.obj:
            print(" " + datadict[j])
