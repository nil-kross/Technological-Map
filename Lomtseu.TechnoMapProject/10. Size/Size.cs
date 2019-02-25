using System;
using System.Collections.Generic;
using System.Text;

namespace Lomtseu.TechnoMapProject {
    public class Size {
        public String Name { get; private set; }
        public Double Value { get; private set; }

        public override String ToString() {
            return $"{this.Name}={this.Value}";
        }
    }
}
