import java.io.*;
import java.util.*;

class Solution {
    // https://docs.google.com/spreadsheets/d/11bsS_ajcJjIEwvDkG8V14gF_r9dz4O0LkdIDC7TtE0I/edit?usp=sharing

    // static boolean hasCycle(ListNode head) {
    //     // your code goes here
    //     HashSet<ListNode> seen = new HashSet<>();
    //     ListNode current = head;
    //     while (current != null) {
    //         if (seen.contains(current)) {
    //             return true;
    //         }
    //         seen.add(current);
    //         current = current.next;
    //     }
    //     return false;
    // }

    static boolean hasCycle(ListNode head) {
        ListNode fast = head.next;
        ListNode slow = head;
        while (fast != null) {
            if (fast == slow) {
                return true;
            }
            fast = fast.next;
            if (fast != null) {
                fast = fast.next;
            }
            slow = slow.next;
        }
        return false;
    }

    public static void main(String[] args) {
        // debug your code below
        ListNode node1 = new ListNode(1);
        ListNode node2 = new ListNode(2);
        ListNode node3 = new ListNode(3);
        ListNode node4 = new ListNode(4);

        // creates a linked list with a cycle: 1 -> 2 -> 3 -> 4 -> 2 (cycle)
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node2;

        System.out.println(hasCycle(node1));
    }
}

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) {
        this.val = val;
        this.next = null;
    }
}