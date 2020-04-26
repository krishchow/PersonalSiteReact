import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BlogImage from '../../components/BlogImage/BlogImage';
import { Helmet } from 'react-helmet'
import BlogBar from '../../components/BlogBar/BlogBar';
import BlogProfile from '../../components/BlogProfile/BlogProfile';
import BlogNav from '../../components/BlogNav/BlogNav';

const tags = [
    {
        active: true,
        desc: 'Technology'
    },
    {
        active: false,
        desc: 'Projects'
    },
    {
        active: false,
        desc: 'Work'
    }
];

class Blog extends Component {
  render() {
      return (
        <div className="App">
            <Helmet>
                <title>LinkedLists</title>
            </Helmet>
            <NavBar/>
            <Header title="Third Blog - Linked Lists" link_test="Why LinkedLists are Amazing" link="/blog/third"/>
            <section class="blog_area single-post-area section_gap">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 posts-list">
                            <div class="single-post row">
                                <BlogImage img="feature-img3.png"/>
                                <BlogBar tags={tags} date="29 September, 2019"/>
                                <div class="col-lg-9 col-md-9 blog_details">
                                    <h2>CSC290 - Why Linked Lists are Amazing</h2>
                                    <p class="excert">
                                        A linked list is one of the most foundational data structures taught in computer science courses today. The most basic linked list, a singly linked list node is comprised of two main attributes:
                                    </p>
                                    <ul>
                                        <li>A value: The value assigned to the current node. This value can be changed and is typically an integer, but it can actually be anything: a list, a character, a string, anything!</li>
                                        <li>The next node: This is a pointer to the next node in our linked list. This allows us to traverse the list since from each node we can access the next node, and then the next, and so forth.</li>
                                    </ul>
                                    <p>
                                        In terms of implementation, this really just boils down to four lines of code, a truly elegant solution. However, this simplicity does not mean that it is not a power accessory in the programmer’s tool belt.
                                    </p>
<pre>
class Node:
        def __init__(self,value):
            self.value = value
            self.next = None
</pre>
                                </div>
                                <div class="col-lg-12">
                                    <div class="quotes">
                                    Aside: Before we get further in-depth into the linked list data structure. I want to give some examples of how linked lists can be utilized to implement higher-order data structures. As I mentioned, the linked list is a powerful and highly dynamic tool.
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <img class="img-fluid" src="/img/blog/blog3/img1.png" alt="Circular Linked List"/>
                                            <div class="quotes">Circular Linked List – a circular linked list is very similar to a singly linked list, except for the fact that the last node in the list points to the first node. Be careful, this can lead to infinite looping.</div>
                                        </div>
                                        <div class="col-6">
                                            <img class="img-fluid" src="/img/blog/blog3/img2.png" alt="Doubly Linked List"/>
                                            <div class="quotes">Doubly Linked List – a doubly linked list makes a slight modification to our previously defined attributes. This data structure ensures that each node maintains a reference to the previous node in the list.</div>
                                        </div>	                               
                                        <div class="col-6">
                                            <img class="img-fluid" src="/img/blog/blog3/img3.png" alt="Stack using nodes"/>
                                            <div class="quotes">Stack – A stack can be implemented using a linked list. We can add to and remove from the start of the linked list in constant time.</div>
                                        </div>	
                                        <div class="col-6">
                                            <img class="img-fluid" src="/img/blog/blog3/img4.jpg" alt="Queue using nodes"/>
                                            <div class="quotes">Queue – A queue can be implemented using a linked list. We can add to the tail of the list, and remove from the head in constant time.</div>
                                        </div>	
                                        <div class="col-6">
                                            <img class="img-fluid" src="/img/blog/blog3/img5.png" alt="Graph"/>
                                            <div class="quotes">Graph – A graph is similar to a linked list, except it changes the definition of next node. With a graph, each node has a link to some set of other nodes. This connection can bidirectional or unidirectional.</div>
                                        </div>	
                                        <div class="col-6">
                                            <img class="img-fluid" src="/img/blog/blog3/img6.png" alt="Hash table with chaining"/>
                                            <div class="quotes">Hash table – A hash table implementation can utilize a linked list to avoid collisions. Instead of recalculating the hash, we create a linked list at each index of the hash table and store elements there.</div>
                                        </div>	
                                        <div class="col-lg-12 mt-25">
                                            <p>To add an index to a linked list, the process involves either traversing the list and adding at the end or adding at the start of the list. Below is an example of the former:</p>
<pre>
def add(linkedlist: node, value) -> node:
    newNode = node(value)
    head = linkedlist
	if not head:
		return newNode
	while head.next:
		head = head.next
	head.next = newNode
	return linkedlist
</pre>
                                            <p>This code works by first copying the pointer to the head list first. Then, we can proceed to walk the list by going from node from node until we reach the last node. Then we set the next value of the last node to be our new node.</p>
                                            <p>Lastly, to remove from a linked list, we need to limit our input to value or the node itself. If we take in value, then we need to ensure the callers is aware that we will remove the first node with that value. For the latter, the value does not matter, since we can directly compare objects. For this example, see the snippet below:</p>
<pre>
def remove(linkedlist: node, target: node) -> node:
    if target is linkedlist:
        return linkedlist.next
    head = linkedlist
    while head.next and head.next is not target:
        head = head.next
    if head.next is target:
        head.next = head.next.next
    #explict case where target not in head
    return linkedlist
</pre>
                                            <p>This code defines an explicit case for the first node in the list. Then, for all other cases we traverse the tree until we either reach the end or until the next node is the target node. We check if the next node is the target node; because we can then update the pointer to exclude the target node from the list. We achieve through the last block we were verify the next node is the target, as opposed to the end, then we update the pointer to skip over the target node.</p>
                                            <p>
                                                That’s all for this week’s blog, I’m looking forward to seeing you again next week!
                                                <br/>
                                                <br/>
                                                Cheers,
                                                <br/>
                                                <br/>
                                                Krish Chowdhary
                                            </p>								
                                        </div>									
                                    </div>
                                </div>
                            </div>
                            <BlogNav
                            prev="Best Project"
                            prev_link="/blog/second"
                            next="CSS Zen"
                            next_link="/blog/fourth"
                            />
                        </div>
                        <BlogProfile/>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
        );
    }
}

export default Blog;
